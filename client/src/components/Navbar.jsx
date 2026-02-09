import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="
      bg-white dark:bg-slate-900
      border-b border-gray-200 dark:border-slate-800
      shadow-sm
      p-4 flex justify-between
    ">
      <h1 className="
        text-2xl font-bold
        text-blue-600
      ">
        CareConnect AI
      </h1>

      <div className="
        space-x-6
        text-gray-700 dark:text-gray-300
      ">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>

        <Link to="/support" className="hover:text-blue-500">
          Support
        </Link>

        <Link to="/admin" className="hover:text-blue-500">
          Admin
        </Link>
      </div>
    </div>
  );
}
