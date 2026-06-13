import axios from "axios";

const API_URL = "http://localhost:5000/api/medicines";

export const getMedicines = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMedicine = async (medicineData) => {
  const response = await axios.post(API_URL, medicineData);
  return response.data;
};

export const dispenseMedicine = async (
  id,
  quantity
) => {
  const response = await axios.put(
    `${API_URL}/${id}/dispense`,
    {
      quantity,
    }
  );

  return response.data;
};