import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="
      min-h-screen flex items-center justify-center
      bg-gradient
      from-slate-900 via-slate-950 to-black
      text-white
    ">
      <div className="text-center max-w-2xl px-6">

        <h1 className="text-6xl font-extrabold mb-6">
          CareConnect AI
        </h1>

        <p className="text-slate-300 mb-10 text-lg">
          AI-powered healthcare support platform.
          Fast. Smart. Reliable.
        </p>

        <Link
          to="/support"
          className="
            bg-blue-600 hover:bg-blue-700
            px-8 py-4 rounded-xl
            shadow-xl
            hover:scale-105
            transition
          "
        >
          Request Help
        </Link>

      </div>
    </div>
  );
}
