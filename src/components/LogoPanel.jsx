import logoCetep from "../assets/images/cetep.jpeg";
import logoEpt from "../assets/images/ept.jpeg";
// import logoBahia from "../assets/images/bahia.jpeg";

export default function LogoPanel() {
  return (
    <div className="w-2/5 bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center gap-12 p-10">

      <img
        src={logoCetep}
        alt="CETEP"
        className="w-72 object-contain"
      />

      <img
        src={logoEpt}
        alt="Educação Profissional e Tecnológica"
        className="w-56 object-contain"
      />

      {/*
      <img
        src={logoBahia}
        alt="Governo da Bahia"
        className="w-72 object-contain"
      />
      */}

    </div>
  );
}