import axios from "axios";

const API_URL = "http://localhost:5000/api/patients";

export const registerPatient = async (patientData) => {
    const response = await axios.post(API_URL, patientData);
    return response.data;
};

export const getPatients = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};