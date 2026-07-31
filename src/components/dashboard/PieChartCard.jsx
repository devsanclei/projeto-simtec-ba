import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const dados = [
  { name: "Matemática", value: 40 },
  { name: "Português", value: 30 },
  { name: "Física", value: 20 },
  { name: "Química", value: 10 },
];

const cores = [
  "#2563eb",
  "#16a34a",
  "#ea580c",
  "#9333ea",
];

export default function PieChartCard() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>

        <Pie
          data={dados}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >

          {dados.map((_, index) => (
            <Cell
              key={index}
              fill={cores[index]}
            />
          ))}

        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}