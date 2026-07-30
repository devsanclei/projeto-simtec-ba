import logoCetep from "../assets/images/cetep.jpeg";
import logoEpt from "../assets/images/ept.jpeg";

export default function LogoPanel() {
  return (
    <div className="w-2/5 bg-gradient-to-br from-blue-700 to-blue-900 text-white flex flex-col justify-center items-center p-12">

      <img
        src={logoCetep}
        alt="CETEP"
        className="w-72 bg-white rounded-xl p-2 shadow-lg"
      />

      <img
        src={logoEpt}
        alt="EPT"
        className="w-56 bg-white rounded-xl p-2 mt-8 shadow-lg"
      />

      <div className="mt-16 text-center">

        <h1 className="text-4xl font-bold">
          SIMTEC BA
        </h1>

        <p className="mt-6 text-lg leading-8 opacity-90">
          Sistema Inteligente de Simulados
        </p>

        <p className="mt-4 text-sm opacity-80 leading-7">
          Plataforma desenvolvida para auxiliar professores,
          coordenadores e gestores na criação, organização e
          aplicação de simulados.
        </p>

      </div>

    </div>
  );
}