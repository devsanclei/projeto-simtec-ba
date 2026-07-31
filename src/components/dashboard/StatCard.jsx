export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className="rounded-xl p-4"
          style={{
            backgroundColor: color,
          }}
        >

          <Icon
            size={30}
            color="white"
          />

        </div>

      </div>

    </div>
  );
}