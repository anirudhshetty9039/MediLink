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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Medicine Inventory
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 mr-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Medicine
        </button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {medicines.map((medicine) => (
  <div
    key={medicine._id}
    className="bg-white p-5 rounded-xl shadow"
  >
    <h2 className="text-xl font-bold">
      {medicine.name}
    </h2>

    <p>Stock: {medicine.quantity}</p>
    <p>Category: {medicine.category}</p>

    <p>
      Expiry{" "}
      {new Date(
        medicine.expiryDate
      ).toLocaleDateString()}
    </p>

    {medicine.quantity < 10 && (
      <p className="text-red-600 font-bold">
        Low Stock
      </p>
    )}

    <div className="mt-4 flex gap-2">
      <button
        onClick={() =>
          handleDispense(medicine._id)
        }
        className="flex-1 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Dispense
      </button>

      <button
        onClick={() =>
          handleDeleteMedicine(medicine._id)
        }
        className="flex-1 bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  </div>
))}
       
      </div>
    </div>
  );
}

export default MedicinePage;