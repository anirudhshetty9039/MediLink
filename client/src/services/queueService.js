import axios from "axios";


const API_URL = "http://localhost:5000/api/queue";

export const getQueue = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToQueue = async (patientId) => {
  const response = await axios.post(API_URL, {
    patientId,
  });

  return response.data;
};

export const updateQueueStatus = async (id, status) => {
  const response = await axios.put(`${API_URL}/${id}`, {
    status,
  });

  return response.data;
};

export const deleteQueueEntry = async (id) => {
  const response = await axios.delete(
    `http://localhost:5000/api/queue/${id}`
  );

  return response.data;
};