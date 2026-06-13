function About() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-white shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/80">
        <div className="rounded-t-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 px-8 py-12 text-white sm:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">
            About MediLink
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Built to simplify clinical workflows
          </h1>
          <p className="mt-4 max-w-3xl text-slate-100/85 sm:text-lg">
            MediLink helps healthcare teams manage patients, medicines, and queues from a single modern portal. Designed for clinics that need reliable functionality with an intuitive interface.
          </p>
        </div>

        <div className="px-6 pb-12 pt-10 sm:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Our mission</h2>
              <p className="mt-4 text-slate-600">
                Empower clinics with easy patient tracking, medicine management, and queue coordination.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">What we do</h2>
              <p className="mt-4 text-slate-600">
                Deliver fast access to clinical data, streamline workflows, and support better decision-making.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Why choose us</h2>
              <p className="mt-4 text-slate-600">
                A clean interface, essential features, and a consistent user experience across the clinic workflow.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200/80 bg-slate-50 p-8 shadow-sm shadow-slate-200/50">
            <h2 className="text-2xl font-semibold text-slate-900">MediLink at a glance</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                <p className="font-semibold text-slate-900">Patient management</p>
                <p className="mt-1 text-sm">Register patients, view details, and navigate care workflows efficiently.</p>
              </li>
              <li className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                <p className="font-semibold text-slate-900">Medicine inventory</p>
                <p className="mt-1 text-sm">Track drug stock, set categories, and dispense items with a reliable inventory view.</p>
              </li>
              <li className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                <p className="font-semibold text-slate-900">Queue coordination</p>
                <p className="mt-1 text-sm">Organize patient flow and stay on top of waiting lists with ease.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
