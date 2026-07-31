const simulados = [
  {
    id: 1,
    nome: "Matemática - 2º Ano",
    disciplina: "Matemática",
    data: "01/08/2026",
    status: "Agendado",
  },
  {
    id: 2,
    nome: "Português - 1º Ano",
    disciplina: "Português",
    data: "03/08/2026",
    status: "Concluído",
  },
  {
    id: 3,
    nome: "Física - 3º Ano",
    disciplina: "Física",
    data: "08/08/2026",
    status: "Em elaboração",
  },
];

export default function RecentSimulations() {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">Simulado</th>

            <th className="text-left">Disciplina</th>

            <th className="text-left">Data</th>

            <th className="text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {simulados.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-slate-50"
            >

              <td className="py-3">{item.nome}</td>

              <td>{item.disciplina}</td>

              <td>{item.data}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}