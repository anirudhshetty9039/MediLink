import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { registerPatient, getPatients } from "../services/patientService";
import { addToQueue } from "../services/queueService";

function RegisterPatient() {
const [formData, setFormData] = useState({
name: "",
age: "",
gender: "",
phone: "",
village: ""
});


const [patients, setPatients] = useState([]);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const handleAddToQueue = async (patientId) => {
  try {
    await addToQueue(patientId);

    alert("Patient added to queue");
  } catch (error) {
    console.error(error);
  }
};
const fetchPatients = async () => {
    try {
        const data = await getPatients();
        setPatients(data);
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
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-8">
        MediLink Health Camp
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-semibold mb-4">
          Register Patient
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="village"
            placeholder="Village"
            value={formData.village}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 md:col-span-5"
          >
            Register Patient
          </button>
        </form>

      </div>

      <h2 className="text-3xl font-bold mb-6">
        Registered Patients
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {patients.map((patient) => (
          <div
            key={patient._id}
            className="bg-white rounded-xl shadow-md p-5"
          >
            <h3 className="text-xl font-bold mb-2">
              {patient.name}
            </h3>

            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Phone: {patient.phone}</p>
            <p>Village: {patient.village}</p>

            <div className="mt-4 flex justify-center">
              
                <QRCodeCanvas
                            value={`http://localhost:5173/patient/${patient._id}`}
                    size={120}
                    />
              
            </div>
            <button
                onClick={() => handleAddToQueue(patient._id)}
                className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
                >
                Add To Queue
                </button>
          </div>
        ))}

      </div>
    </div>
  </div>
);


}

export default RegisterPatient;
