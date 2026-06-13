import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white font-semibold">M</div>
          <span className="text-lg font-semibold text-slate-900">MediLink</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">Dashboard</Link>
          <Link to="/patients" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">Patients</Link>
          <Link to="/queue" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">Queue</Link>
          <Link to="/medicines" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">Medicines</Link>
          <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">About</Link>
          <Link to="/login" className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-cyan-600 border border-cyan-600 hover:bg-cyan-50">Login</Link>
          <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium bg-cyan-600 text-white hover:bg-cyan-700">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;