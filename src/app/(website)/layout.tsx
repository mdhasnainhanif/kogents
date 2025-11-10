// app/(landing)/layout.tsx

import ConditionalLayout from "@/components/ConditionalLayout";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConditionalLayout>
      {children}
    </ConditionalLayout>
  );
}
