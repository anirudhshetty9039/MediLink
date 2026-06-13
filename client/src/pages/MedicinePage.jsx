import { useEffect, useState } from "react";
import {
  getMedicines,
  createMedicine,
  dispenseMedicine,
  deleteMedicine
} from "../services/medicineService";

function MedicinePage() {
  const [medicines, setMedicines] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    expiryDate: "",
    category: "",
  });

  const fetchMedicines = async () => {
    const data = await getMedicines();
    setMedicines(data);
  };

  const handleDispense = async (id) => {
    try {
      await dispenseMedicine(id, 1);

      fetchMedicines();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMedicine = async (id) => {
    try {
      await deleteMedicine(id);

      fetchMedicines();

      alert("Medicine deleted");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createMedicine(formData);

    fetchMedicines();

    setFormData({
      name: "",
      quantity: "",
      expiryDate: "",
      category: "",
    });
  };



  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white shadow-2xl shadow-slate-200/70 ring-1 ring-slate-200/80">
        <div className="rounded-t-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 px-8 py-10 text-white sm:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">
            Medicine Inventory
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Manage medicine stock
              </h1>
              <p className="mt-3 max-w-2xl text-slate-100/85 sm:text-lg">
                Add new medicines, dispense stock, and keep your inventory up to date with ease.
              </p>
            </div>
            <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-sm shadow-slate-900/10">
              Live inventory
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] px-6 pb-10 pt-8 sm:px-10">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-2xl font-semibold text-slate-900">
                Add medicine
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Use the form below to register new medicine items into your clinic inventory.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Medicine Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  Add Medicine
                </button>
              </form>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Medicine count</p>
                <p className="mt-4 text-4xl font-bold text-slate-900">{medicines.length}</p>
                <p className="mt-3 text-sm text-slate-500">Total registered medicines in inventory.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Stock status</p>
                <p className="mt-4 text-4xl font-bold text-slate-900">{medicines.filter((medicine) => medicine.quantity < 10).length}</p>
                <p className="mt-3 text-sm text-slate-500">Items currently below low stock threshold.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Inventory list</h2>
                <p className="mt-2 text-sm text-slate-500">Manage medicines with dispense and delete actions.</p>
              </div>
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Live</span>
            </div>

            <div className="mt-6 space-y-4">
              {medicines.map((medicine) => (
                <div
                  key={medicine._id}
                  className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{medicine.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{medicine.category} • Expiry {new Date(medicine.expiryDate).toLocaleDateString()}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">Stock: {medicine.quantity}</div>
                  </div>

                  {medicine.quantity < 10 && (
                    <p className="mt-3 text-sm font-semibold text-red-600">Low stock available</p>
                  )}

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => handleDispense(medicine._id)}
                      className="flex-1 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Dispense
                    </button>
                    <button
                      onClick={() => handleDeleteMedicine(medicine._id)}
                      className="flex-1 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicinePage;