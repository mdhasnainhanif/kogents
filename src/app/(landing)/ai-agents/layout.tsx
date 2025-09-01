import Footer from "@/components/ai-agents/Footer";
import Header from "@/components/ai-agents/Header";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
