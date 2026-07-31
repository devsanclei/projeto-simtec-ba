import {
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

const avisos = [

    {
        titulo: "Backup realizado com sucesso",
        icone: Info,
        cor: "text-blue-600",
    },

    {
        titulo: "Simulado de Matemática amanhã",
        icone: AlertTriangle,
        cor: "text-orange-500",
    },

    {
        titulo: "Sistema atualizado",
        icone: AlertCircle,
        cor: "text-green-600",
    },

];

export default function NoticeBoard() {

    return (

        <div className="space-y-5">

            {avisos.map((item, index) => {

                const Icon = item.icone;

                return (

                    <div
                        key={index}
                        className="flex gap-3 items-center"
                    >

                        <Icon className={item.cor} />

                        <span>{item.titulo}</span>

                    </div>

                );

            })}

        </div>

    );

}