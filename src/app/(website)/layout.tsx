// app/(landing)/layout.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import SideForm from "@/components/SideForm/SideForm";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
      <SideForm />
      <NewFooter />
    </>
  );
}
