// app/qa/layout.tsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Q&A",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}