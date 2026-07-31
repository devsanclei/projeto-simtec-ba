import { Link } from "react-router-dom";

export default function DevNavigation() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-white shadow-xl rounded-xl p-4 flex gap-3">

      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Login
      </Link>

      <Link
        to="/dashboard"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Dashboard
      </Link>

    </div>
  );
}