// app/research/layout.tsx

export const metadata = {
  title: "Research",
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}