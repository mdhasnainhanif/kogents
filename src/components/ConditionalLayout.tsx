"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import SideForm from "@/components/SideForm/SideForm";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAIAgentPage = pathname === "/ai-agent" || pathname.startsWith("/ai-agent/");

  if (isAIAgentPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <SideForm />
      <NewFooter />
    </>
  );
}

