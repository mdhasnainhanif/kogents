import FooterV2 from "@/components/FooterV2";
import HeaderV2 from "@/components/HeaderV2";

export default function AIAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderV2 />
      <main>
        {children}
      </main>
      <FooterV2 />
    </>
  );
}

