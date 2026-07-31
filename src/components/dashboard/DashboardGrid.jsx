export default function DashboardGrid({ children }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {children}
    </div>
  );
}