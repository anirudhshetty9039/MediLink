import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">
        MediLink
      </h1>

      <p className="mb-8">
        Rural Health Camp Management System
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;