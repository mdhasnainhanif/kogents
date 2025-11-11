import axios from "axios";
export type WorkspacePayload = {
  userId?: string;
  companyName: string; // maps to "name"
  industry?: string; // maps to "vertical"
  companySize?: string;
  country?: string;
  email?: string;
  description?: string;
  websiteUrl?: string;
  // slug intentionally omitted from client payload
  files?: File[];
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function createWorkspaceWithFiles(data: WorkspacePayload) {
  const formData = new FormData();

  if (data.userId) formData.append("userId", data.userId);

  const name = (data.companyName || "").trim();
  if (name) formData.append("name", name);

  // slug is no longer sent from the client; backend will derive if needed

  if (data.industry) formData.append("vertical", data.industry);
  if (data.companySize) formData.append("companySize", data.companySize);
  if (data.country) formData.append("country", data.country);
  if (data.email) formData.append("email", data.email);
  if (data.description) formData.append("description", data.description);
  if (data.websiteUrl) formData.append("websiteUrl", data.websiteUrl);

  for (const file of data.files || []) {
    formData.append("files", file, (file as File).name);
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_WORKSPACE_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:7001";
  const url = `${baseUrl.replace(/\/+$/, "")}/workspace/with-files`;

  try {
    // Try to attach an auth token if available (from localStorage or env)
    let token: string | null = null;
    try {
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('authToken') || localStorage.getItem('token') || localStorage.getItem('accessToken') || localStorage.getItem('idToken') || null;
      }
    } catch (e) {
      // ignore
    }
    // Fallback to env var (useful in SSR or test environments)
    token = token || process.env.NEXT_PUBLIC_API_TOKEN || process.env.NEXT_PUBLIC_API_KEY || null;

    const headers: Record<string, string> = {};
    // Let axios set the Content-Type boundary for multipart
    // but include Authorization when we have a token
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.post(url, formData, {
      headers,
      withCredentials: false,
      timeout: 60000,
      // Important on some environments to avoid transforming FormData
      transformRequest: [(payload: any) => payload],
    });
    return response.data ?? {};
  } catch (err: any) {
    const status = err?.response?.status;
    const dataMsg = typeof err?.response?.data === "string"
      ? err.response.data
      : JSON.stringify(err?.response?.data || {});
    const msg = `Workspace API failed${status ? ` (${status})` : ""}: ${dataMsg || err?.message || "Unknown error"}`;
    throw new Error(msg);
  }
}


