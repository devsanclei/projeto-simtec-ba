export default function SectionCard({ title, children }) {

    return ( 
       <><div className="grid grid-cols-3 gap-6 mt-8">

            <div className="col-span-2">

                <SectionCard title="Últimos Simulados">

                    <RecentSimulations />

                </SectionCard>

            </div>

            <SectionCard title="Avisos">

                <NoticeBoard />

            </SectionCard>

        </div><div className="mt-8">

                <SectionCard title="Atividades Recentes">

                    <ActivityList />

                </SectionCard>

            </div></>
    );

}