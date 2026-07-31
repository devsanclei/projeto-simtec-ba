const atividades = [

    "Professor João criou um novo simulado",

    "Questão adicionada ao banco",

    "Novo usuário cadastrado",

    "Simulado de Física publicado",

];

export default function ActivityList() {

    return (

        <ul className="space-y-4">

            {atividades.map((atividade, index) => (

                <li
                    key={index}
                    className="border-l-4 border-blue-600 pl-4"
                >

                    {atividade}

                </li>

            ))}

        </ul>

    );

}