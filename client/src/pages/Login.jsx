import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );
    navigate("/dashboard");

    alert("Login Success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl overflow-hidden rounded-[32px] bg-white/95 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-200/20 backdrop-blur sm:grid sm:grid-cols-[1.2fr_1.8fr]">
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-b from-sky-700 via-indigo-700 to-violet-700 p-10 text-white">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80 font-semibold">
              MediLink Portal
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight">
              Secure clinical access
            </h2>
            <p className="mt-4 max-w-sm text-sm text-slate-100/90">
              Sign in to manage patient records, view medicine inventory, and coordinate queues from one secure dashboard.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-inner shadow-black/10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-100/80">
              Pro healthcare workflow
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-100/85">
              <li>• Secure authentication</li>
              <li>• Fast patient access</li>
              <li>• Clean, modern UI</li>
            </ul>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Welcome back
            </p>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Login to your account
            </h1>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Enter your email and password to continue to the MediLink dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-cyan-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Login
            </button>

            <p className="text-center text-sm text-slate-500">
              Secure login for authorized MediLink staff only.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;