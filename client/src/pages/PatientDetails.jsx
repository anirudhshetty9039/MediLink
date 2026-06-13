import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatientById } from "../services/patientService";

function PatientDetails() {
  const { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(id);
        setPatient(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatient();
  }, [id]);

  if (!patient) {
    return (
      <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/80">
          <h1 className="text-3xl font-semibold text-slate-900">Loading patient details...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/80">
        <div className="rounded-t-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 px-8 py-10 text-white sm:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">
            Patient profile
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {patient.name}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-100/85 sm:text-lg">
            View complete patient information, contact details, and demographic data.
          </p>
        </div>

        <div className="px-6 pb-10 pt-8 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Personal information</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                  <p className="text-sm text-slate-500">Name</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{patient.name}</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                  <p className="text-sm text-slate-500">Age</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{patient.age}</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                  <p className="text-sm text-slate-500">Gender</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{patient.gender}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{patient.phone}</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                  <p className="text-sm text-slate-500">Village</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">{patient.village}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
            <h2 className="text-xl font-semibold text-slate-900">Patient snapshot</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                <p className="text-sm text-slate-500">Patient ID</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{patient._id}</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-200/40">
                <p className="text-sm text-slate-500">Registered</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{new Date(patient.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;