import axios from "axios";

// Generate random brandId
function generateBrandId(): string {
  // Format: brand-{random-string}-{timestamp}
  const randomStr = Math.random().toString(36).substring(2, 15);
  const timestamp = Date.now().toString(36);
  return `brand-${randomStr}-${timestamp}`;
}

export type WorkspacePayload = {
  userId?: string;
  companyName: string; // maps to "name" (required)
  industry?: string; // maps to "vertical"
  companySize?: string;
  country?: string;
  email?: string;
  description?: string;
  websiteUrl?: string;
  files?: File[];
  // New kogent-bot fields
  botName?: string;
  business?: string; // Changed from boolean to string
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  info?: string; // Step 6 integration data
  infoCheckbox?: boolean;
  brandId?: string; // Optional brandId (will be generated if not provided)
  tags?: string[]; // New optional field
  // Bot appearance fields
  colors?: string; // primaryColor from appearance
  displayTitle?: string; // botname
  imageUrl?: string; // avatar from appearance
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

  // Generate random brandId if not provided
  const brandId = data.brandId || generateBrandId();

  // Required fields
  const name = (data.companyName || "").trim();
  if (!name) {
    throw new Error("name (companyName) is required");
  }
  formData.append("name", name);

  // Generate slug from name (required)
  const slug = slugify(name);
  if (!slug) {
    throw new Error("Unable to generate slug from name");
  }
  formData.append("slug", slug);

  // Optional workspace fields
  if (data.userId) formData.append("userId", data.userId);
  if (data.industry) formData.append("vertical", data.industry);
  if (data.companySize) formData.append("companySize", data.companySize);
  if (data.country) formData.append("country", data.country);
  if (data.email) formData.append("email", data.email);
  if (data.description) formData.append("description", data.description);
  if (data.websiteUrl) formData.append("websiteUrl", data.websiteUrl);
  if (data.tags && data.tags.length > 0) {
    data.tags.forEach((tag) => formData.append("tags", tag));
  }

  // New kogent-bot fields
  if (data.botName) formData.append("botName", String(data.botName));
  if (data.business) formData.append("business", String(data.business));
  if (data.fullName) formData.append("fullName", String(data.fullName));
  if (data.emailAddress) formData.append("emailAddress", String(data.emailAddress));
  if (data.phoneNumber) formData.append("phoneNumber", String(data.phoneNumber));
  
  // Send brandId as separate field
  formData.append("brandId", brandId);
  
  // Send info field (Step 6 integration data)
  formData.append("info", String(data.info || ""));
  
  if (data.infoCheckbox !== undefined) formData.append("infoCheckbox", String(data.infoCheckbox));

  // Bot appearance fields
  if (data.colors) formData.append("colors", String(data.colors));
  if (data.displayTitle) formData.append("displayTitle", String(data.displayTitle));
  if (data.imageUrl) {
    const imageUrl = String(data.imageUrl);
    // If it's already a full URL (base64 or absolute), use as-is
    if (imageUrl.startsWith('data:') || imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      formData.append("imageUrl", imageUrl);
    } else {
      // For relative paths like /assets/img/brief/avatar3.png, prepend base URL
      formData.append("imageUrl", `https://kogents.ai${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`);
    }
  }

  // Append files
  for (const file of data.files || []) {
    formData.append("files", file, (file as File).name);
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_WORKSPACE_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:7001";
  const url = `${baseUrl.replace(/\/+$/, "")}/workspace/kogent-bot`;

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


