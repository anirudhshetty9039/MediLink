import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { registerPatient, getPatients, deletePatient } from "../services/patientService";
import { addToQueue } from "../services/queueService";
import { getQueue } from "../services/queueService";

function RegisterPatient() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    village: ""
  });


  const [patients, setPatients] = useState([]);
  const [queuedPatients, setQueuedPatients] = useState([]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleAddToQueue = async (patientId) => {
    try {
      await addToQueue(patientId);

      const queueData = await getQueue();

      setQueuedPatients(
        queueData.map((entry) => entry.patientId._id)
      );

      alert("Patient added to queue");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  const handleDeletePatient = async (id) => {
    try {
      await deletePatient(id);

      fetchPatients();

      alert("Patient deleted");
    } catch (error) {
      console.error(error);
    }
  };
  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);

      const queueData = await getQueue();

      setQueuedPatients(
        queueData.map((entry) => entry.patientId._id)
      );

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerPatient(formData);

      alert("Patient Registered");

      fetchPatients();

      setFormData({
        name: "",
        age: "",
        gender: "",
        phone: "",
        village: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-white shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/80">
        <div className="rounded-t-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 px-8 py-10 text-white sm:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">MediLink Health Camp</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Register patients quickly</h1>
          <p className="mt-3 max-w-2xl text-slate-100/85 sm:text-lg">Register patients, generate QR links, and add them to the clinic queue.</p>
        </div>

        <div className="px-6 pb-10 pt-8 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-2xl font-semibold text-slate-900">Register Patient</h2>
              <p className="mt-2 text-sm text-slate-500">Enter patient details to create a new record.</p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />

                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />

                <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />

                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />

                <input type="text" name="village" placeholder="Village" value={formData.village} onChange={handleChange} className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100" />

                <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-cyan-500">Register Patient</button>
              </form>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">Registered Patients</h2>
                <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">Live</span>
              </div>

              <div className="mt-6 grid gap-4">
                {patients.map((patient) => (
                  <div key={patient._id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{patient.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{patient.village} • Age {patient.age} • {patient.gender}</p>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <QRCodeCanvas value={`http://localhost:5173/patient/${patient._id}`} size={88} />
                        <div className="text-sm text-slate-500">QR Link</div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <button onClick={() => handleAddToQueue(patient._id)} disabled={queuedPatients.includes(patient._id)} className={`rounded-full px-4 py-3 text-sm font-semibold text-white ${queuedPatients.includes(patient._id) ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}>
                        {queuedPatients.includes(patient._id) ? 'Added ✓' : 'Add To Queue'}
                      </button>
                      <button onClick={() => handleDeletePatient(patient._id)} className="rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700">Delete Patient</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default RegisterPatient;
