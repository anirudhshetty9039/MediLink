import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    fetchStats();
  }, []);

  const exportPDF = async () => {
    const input = document.getElementById("dashboard-report");

    const canvas = await html2canvas(input);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 190;
    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      pdfWidth,
      pdfHeight
    );

    pdf.save("MediLink_Report.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        MediLink Dashboard
      </h1>

      <button
        onClick={exportPDF}
        className="bg-green-600 text-white px-4 py-2 rounded mb-6"
      >
        Export PDF Report
      </button>

      <div id="dashboard-report">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Total Patients</h2>
            <p className="text-3xl font-bold">
              {stats.totalPatients}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Total Medicines</h2>
            <p className="text-3xl font-bold">
              {stats.totalMedicines}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Waiting</h2>
            <p className="text-3xl font-bold">
              {stats.waitingPatients}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2>Completed</h2>
            <p className="text-3xl font-bold">
              {stats.completedPatients}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;