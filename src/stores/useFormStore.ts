import { create } from "zustand";
import {
  sendContact,
  type SendContactInput,
  type SendContactResult,
} from "@/lib/contact/sendContact";

interface FormData {
  name: string;
  phone: string;
  email: string;
  project_need: string;
  gclid: string;
  fbclid: string;
  igclid: string;
  ttclid: string;
  fingerprint: string;
  chat: string;
  stable_session_id: string;
  fingerprintdata: string;
  // Optional extras supported by sendContact (leave empty to let backend infer)
  client_ip?: string;
  to?: string;
  service_id?: string | number;
  link?: string;
}

interface FormState {
  formData: FormData;
  isLoading: boolean;
  isSubmitted: boolean;
  error: string | null;
  success: string | null;
}

interface FormActions {
  updateField: (field: keyof FormData, value: string) => void;
  setTrackingParams: (params: Partial<FormData>) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSuccess: (success: string | null) => void;
  resetForm: () => void;
  submitForm: () => Promise<void>;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  project_need: "",
  gclid: "",
  fbclid: "",
  igclid: "",
  ttclid: "",
  fingerprint: "",
  chat: "",
  stable_session_id: "",
  fingerprintdata: "",
  // Optional overrides (default behavior matches your server route)
  to: "info@kogents.ai",
  service_id: 1,
  link: "https://kogents.ai/contact",
};

export const useFormStore = create<FormState & FormActions>((set, get) => ({
  formData: initialFormData,
  isLoading: false,
  isSubmitted: false,
  error: null,
  success: null,

  updateField: (field, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    }));
  },

  setTrackingParams: (params) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...params,
      },
    }));
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },

  setError: (error) => {
    set({ error, success: null });
  },

  setSuccess: (success) => {
    set({ success, error: null, isSubmitted: true });
  },

  resetForm: () => {
    set({
      formData: initialFormData,
      isLoading: false,
      isSubmitted: false,
      error: null,
      success: null,
    });
  },

  submitForm: async () => {
    const { formData } = get();

    // Basic validation (same as before)
    if (!formData.name.trim()) {
      set({ error: "Name is required" });
      return;
    }
    if (!formData.email.trim()) {
      set({ error: "Email is required" });
      return;
    }
    if (!formData.phone.trim()) {
      set({ error: "Phone is required" });
      return;
    }
    if (!formData.project_need.trim()) {
      set({ error: "Project description is required" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      // Map to sendContact input (1:1 with your prior server route fields)
      const payload: SendContactInput = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project_need: formData.project_need,

        gclid: formData.gclid,
        fbclid: formData.fbclid,
        igclid: formData.igclid,
        ttclid: formData.ttclid,

        fingerprint: formData.fingerprint,
        chat: formData.chat,
        stable_session_id: formData.stable_session_id,
        fingerprintdata: formData.fingerprintdata,

        // Optional extras (user_agent is auto-filled inside sendContact)
        client_ip: formData.client_ip, // leave undefined to let PHP infer
        to: formData.to ?? "info@kogents.ai",
        service_id: formData.service_id ?? 1,
        link: formData.link ?? "https://kogents.ai/contact",
      };

      const result: SendContactResult = await sendContact(payload);

      if (result.status === "success") {
        const successMsg =
          result.message ||
          (result.details?.data?.email_to
            ? `Email sent to ${result.details.data.email_to}`
            : "Form submitted successfully!");
            
        // Mark success and immediately clear only the fields
        set({ success: successMsg, isLoading: false, isSubmitted: true });
        set({ formData: initialFormData });

        // Optional: inspect CRM/email sub-results in console for debugging
        if (result.crm) console.log("🧾 CRM:", result.crm);
        if (result.email) console.log("📧 Email:", result.email);

        // Auto-hide success after 3 seconds
        setTimeout(() => {
          set({ success: null });
        }, 3000);
      } else {
        const errMsg =
          result.message ||
          (typeof result.details === "string"
            ? result.details
            : "Form submission failed");
        set({ error: errMsg, isLoading: false });
      }
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Something went wrong",
        isLoading: false,
      });
    }
  },
}));
