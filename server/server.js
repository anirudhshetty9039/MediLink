const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/queue", require("./routes/queueRoutes"));


app.get("/", (req, res) => {
    res.send("MediLink API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});