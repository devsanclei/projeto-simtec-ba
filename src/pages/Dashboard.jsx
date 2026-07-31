import MainLayout from "../components/layout/MainLayout";

import DashboardGrid from "../components/dashboard/DashboardGrid";
import StatCard from "../components/dashboard/StatCard";
import SectionCard from "../components/dashboard/SectionCard";

import {
    ClipboardList,
    FileText,
    GraduationCap,
    Users,
} from "lucide-react";

export default function Dashboard() {

    return (

        <MainLayout>

            <DashboardGrid>

                <StatCard
                    title="Simulados"
                    value="128"
                    icon={ClipboardList}
                    color="#2563eb"
                />

                <StatCard
                    title="Questões"
                    value="1542"
                    icon={FileText}
                    color="#16a34a"
                />

                <StatCard
                    title="Professores"
                    value="35"
                    icon={GraduationCap}
                    color="#ea580c"
                />

                <StatCard
                    title="Usuários"
                    value="1250"
                    icon={Users}
                    color="#9333ea"
                />

            </DashboardGrid>

            <div className="grid grid-cols-2 gap-6 mt-8">

                <SectionCard title="Últimos Simulados">

                    Em breve...

                </SectionCard>

                <SectionCard title="Avisos">

                    Em breve...

                </SectionCard>

            </div>

        </MainLayout>

    );

}