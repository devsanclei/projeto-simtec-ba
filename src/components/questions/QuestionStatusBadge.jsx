export default function QuestionStatusBadge({ dificuldade }) {
  const estilos = {
    Fácil: "bg-green-100 text-green-700",
    Médio: "bg-yellow-100 text-yellow-700",
    Difícil: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        estilos[dificuldade] ||
        "bg-slate-100 text-slate-600"
      }`}
    >
      {dificuldade}
    </span>
  );
}