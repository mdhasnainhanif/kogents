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
        alert("Please enter an email")
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
            alert("Message sent successfully!");
        }
    } catch (fetchError: any) {
        console.error("❌ Fetch Error:");
        console.error("- Error Type:", fetchError.constructor.name);
        console.error("- Error Message:", fetchError.message);
        console.error("- Full Error:", fetchError);
        
        alert(`Error: ${fetchError.message || "Failed to send message. Please try again."}`);
        throw fetchError;
    }
}