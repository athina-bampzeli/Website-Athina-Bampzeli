// app/research/layout.tsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Research",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar /> */}
      <div>{children}</div>
    </>
  );
}