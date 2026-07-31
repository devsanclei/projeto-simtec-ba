import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const dados = [
  { mes: "Jan", simulados: 10 },
  { mes: "Fev", simulados: 18 },
  { mes: "Mar", simulados: 14 },
  { mes: "Abr", simulados: 25 },
  { mes: "Mai", simulados: 32 },
  { mes: "Jun", simulados: 28 },
];

export default function BarChartCard() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={dados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="simulados" fill="#2563eb" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}