export const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // You can access fields by name:
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const description = formData.get("project_need");


    if (!email) {
        // Show inline error below the submit button (no alert)
        showTemporaryBanner(form, "Please enter an email", "error");
        return;
    }

    console.log("📤 Submitting Contact Form...");
    console.log("- Name:", name);
    console.log("- Email:", email);
    console.log("- Phone:", phone);
    console.log("- Description:", description);

    try {
        const res = await fetch("/api/contactForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, description }),
        });

        const data = await res.json();
        
        console.log("📥 API Response Received:");
        console.log("- Status:", res.status);
        console.log("- Status OK:", res.ok);
        console.log("- Response Data:", data);

        if (!res.ok) {
            console.error("❌ API Error Response:");
            console.error("- Error:", data.error);
            console.error("- Details:", data.details);
            console.error("- Code:", data.code);
            throw new Error(data.error || data.details || "Failed to send email");
        } else {
            console.log("✅ Email sent successfully!");
            console.log("- Message ID:", data.messageId);
            form.reset();
            // Inline green success message below the submit button
            showTemporaryBanner(form, "Message sent successfully!", "success");
        }
    } catch (fetchError: any) {
        console.error("❌ Fetch Error:");
        console.error("- Error Type:", fetchError.constructor.name);
        console.error("- Error Message:", fetchError.message);
        console.error("- Full Error:", fetchError);

        // Inline error message below the submit button
        showTemporaryBanner(
            form,
            fetchError?.message || "Failed to send message. Please try again.",
            "error"
        );
        throw fetchError;
    }
}

function showTemporaryBanner(form: HTMLFormElement, text: string, kind: "success" | "error") {
    // Remove any existing banner first
    const existing = form.querySelector(".inline-banner-msg");
    if (existing && existing.parentElement) existing.parentElement.removeChild(existing);

    const banner = document.createElement("div");
    banner.className = "inline-banner-msg mb-3";
    banner.style.borderRadius = "8px";
    banner.style.padding = "12px 14px";
    banner.style.fontSize = "14px";
    banner.style.fontWeight = "500";
    banner.style.transition = "opacity 200ms ease";
    banner.style.opacity = "1";

    if (kind === "success") {
        banner.style.background = "#0f5132"; // dark green bg
        banner.style.color = "#d1e7dd";      // mint text
        banner.style.border = "1px solid #badbcc";
    } else {
        banner.style.background = "#5c2623"; // dark red bg
        banner.style.color = "#f8d7da";      // light red text
        banner.style.border = "1px solid #f5c2c7";
    }

    banner.textContent = text;

    // Insert right below the submit button container if present
    const buttonContainer = form.querySelector(".border-button");
    if (buttonContainer && buttonContainer.parentElement) {
        buttonContainer.parentElement.insertBefore(banner, buttonContainer.nextSibling);
    } else {
        // Fallback: append to form end
        form.appendChild(banner);
    }

    // Auto-hide after 3 seconds
    setTimeout(() => {
        banner.style.opacity = "0";
        setTimeout(() => {
            if (banner.parentElement) banner.parentElement.removeChild(banner);
        }, 250);
    }, 3000);
}