export default function SectionCard({ title, children }) {

    return (

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-5">

                {title}

            </h2>

            {children}

        </div>

    );

}