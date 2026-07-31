export default function StatCard({
    title,
    value,
    icon: Icon,
    color,
}) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition hover:shadow-lg">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-500 text-sm">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {value}

                    </h2>

                </div>

                <div
                    className="p-4 rounded-xl"
                    style={{ backgroundColor: color }}
                >

                    <Icon color="white" size={30} />

                </div>

            </div>

        </div>

    );

}