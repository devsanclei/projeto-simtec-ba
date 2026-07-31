export default function StatusBadge({ status }) {

  const colors = {
    Ativo: "bg-green-100 text-green-700",
    Rascunho: "bg-yellow-100 text-yellow-700",
    Encerrado: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}