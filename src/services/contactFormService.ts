import { useFormStore } from "@/stores/useFormStore";

/**
 * Handle contact form submission.
 * Returns true on success so the caller can remount the form.
 */
export const handleContactFormSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  onSuccess?: () => void,
  onError?: () => void,
): Promise<boolean> => {
  e.preventDefault();
  const form = e.currentTarget;
  const fd = new FormData(form);

  const name = (fd.get("name") as string) || "";
  const email = (fd.get("email") as string) || "";
  const phone = (fd.get("phone") as string) || "";
  const description = (fd.get("project_need") as string) || "";

  if (!email.trim()) {
    showTemporaryBanner(form, "Please enter an email", "error");
    return false;
  }

  try {
    const res = await fetch("/api/contactForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, description }),
    });

    
    // console.log("res ==>>", res);
 
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || data?.details || "Failed to send email");
    }
    
    console.log("onSuccess");
     onSuccess?.();

    // 1) Reset Zustand (controlled inputs become empty)
    const { resetForm } = useFormStore.getState();
    resetForm();

    console.log("resetForm");

    // 2) Reset native form (extra safety against autofill/IME artifacts)
    form.reset();

    showTemporaryBanner(form, "Message sent successfully!", "success");
    return true;
  } catch (err: any) {
    showTemporaryBanner(
      form,
      err?.message || "Failed to send message. Please try again.",
      "error"
    );

    onError?.();
    return false;
  }
};

function showTemporaryBanner(
  form: HTMLFormElement,
  text: string,
  kind: "success" | "error"
) {
  // Remove existing banner if any
  const existing = form.querySelector(".inline-banner-msg");
  if (existing?.parentElement) existing.parentElement.removeChild(existing);

  const banner = document.createElement("div");
  banner.className = "inline-banner-msg";
  banner.style.borderRadius = "0";
  banner.style.padding = "0";
  banner.style.fontSize = "14px";
  banner.style.fontWeight = "500";
  banner.style.transition = "opacity 200ms ease";
  banner.style.opacity = "1";
  banner.style.margin = "8px 0 0 0";
  banner.style.background = "transparent";
  banner.style.border = "none";
  banner.style.color = kind === "success" ? "#22c55e" : "#ef4444";
  banner.textContent = text;

  // Place after submit button
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn && submitBtn.parentElement) {
    submitBtn.parentElement.appendChild(banner);
  } else {
    form.appendChild(banner);
  }

  setTimeout(() => {
    banner.style.opacity = "0";
    setTimeout(() => banner.parentElement?.removeChild(banner), 250);
  }, 3000);
}
