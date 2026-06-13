import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-center gap-10">
        <div className="rounded-[32px] border border-slate-200/70 bg-white p-10 shadow-2xl shadow-slate-200/50">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-600/80 font-semibold">
              MediLink
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Rural Health Camp Management System
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              Simplify patient intake, medicine tracking, and queue coordination for health camps and rural clinics.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-cyan-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full border border-cyan-600 bg-white px-8 py-3 text-base font-semibold text-cyan-600 transition hover:bg-cyan-50"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-900">Patient Management</h2>
            <p className="mt-4 text-slate-600">
              Register and manage patient details from one intuitive dashboard.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-900">Medicine Inventory</h2>
            <p className="mt-4 text-slate-600">
              Track stock levels, dispense medicines, and keep inventory up to date.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/40">
            <h2 className="text-xl font-semibold text-slate-900">Queue Coordination</h2>
            <p className="mt-4 text-slate-600">
              Manage patient queues and reduce wait times with clear status tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;