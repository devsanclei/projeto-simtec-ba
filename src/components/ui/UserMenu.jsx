import { CircleUserRound } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-3">

      <CircleUserRound
        size={42}
        className="text-blue-700"
      />

      <div>

        <h2 className="font-semibold">
          Administrador
        </h2>

        <p className="text-sm text-slate-500">
          admin@simtec.ba.gov.br
        </p>

      </div>

    </div>
  );
}