export const handleBriefForm = async (response: string): Promise<void> => {
    try {
        const jsonObject = JSON.parse(response);
        const { html } = jsonObject;

        if (!html) {
            console.warn("⚠️ No HTML found in brief form response.");
            return;
        }

        console.log("📨 Sending brief email via /api/send-email...");

        const res = await fetch("/api/brief", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ html }),
        });

        const data = await res.json().catch(() => ({})); // <-- ✅ Wait for full completion

        if (res.ok) {
            console.log("✅ Brief email sent successfully:", data);
        } else {
            console.error("❌ Error sending brief email:", data);
        }

        return; // ensures async function resolves only after all work done
    } catch (error: any) {
        console.error("🚨 handleBriefForm error:", error);
    }
};
