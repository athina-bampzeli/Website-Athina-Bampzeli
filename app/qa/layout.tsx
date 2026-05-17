// app/qa/layout.tsx

export const metadata = {
  title: "Q&A",
};

export default function QALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}