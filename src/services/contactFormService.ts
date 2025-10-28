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

    const res = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, description }),
    });

    const data = await res.json();
    console.log(data)
    if (!res.ok) { throw new Error(data.error || "Failed to send email") }
    else {
        form.reset();
        alert("Message sent successfully!");
    }
}