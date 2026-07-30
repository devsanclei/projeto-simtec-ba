export default function Content({ children }) {
  return (
    <main className="flex-1 overflow-auto bg-slate-100 p-8">
      {children}
    </main>
  );
}