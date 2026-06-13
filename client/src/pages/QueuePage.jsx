import { useEffect, useState } from "react";
import { getQueue } from "../services/queueService";
import { updateQueueStatus } from "../services/queueService";
import { deleteQueueEntry } from "../services/queueService";

function QueuePage() {
  const [queue, setQueue] = useState([]);


  const handleStatusChange = async (id, status) => {
    try {
      await updateQueueStatus(id, status);

      const data = await getQueue();
      setQueue(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteQueue = async (id) => {
    try {
      await deleteQueueEntry(id);

      const data = await getQueue();
      setQueue(data);

      alert("Queue entry deleted");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const data = await getQueue();
        setQueue(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQueue();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-white shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200/80">
        <div className="rounded-t-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 px-8 py-10 text-white sm:px-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">
            Queue Management
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Patient Queue
          </h1>
          <p className="mt-3 max-w-2xl text-slate-100/85 sm:text-lg">
            Monitor patient flow, update status, and keep queue operations running smoothly.
          </p>
        </div>

        <div className="px-6 pb-10 pt-8 sm:px-10">
          <div className="grid gap-6">
            {queue.map((entry) => (
              <div
                key={entry._id}
                className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Token #{entry.tokenNumber}</h2>
                    <p className="mt-2 text-sm text-slate-500">
                      {entry.patientId?.name || "Deleted Patient"} • Age {entry.patientId?.age || "-"} • {entry.patientId?.village || "-"}
                    </p>
                  </div>
                  <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${entry.status === "completed"
                    ? "bg-emerald-100 text-emerald-700"
                    : entry.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-slate-100 text-slate-700"
                    }`}>
                    {entry.status}
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <button
                    onClick={() =>
                      handleStatusChange(entry._id, "in-progress")
                    }
                    className="rounded-full bg-yellow-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
                  >
                    Start
                  </button>
                  <button
                    onClick={() =>
                      handleStatusChange(entry._id, "completed")
                    }
                    className="rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => handleDeleteQueue(entry._id)}
                    className="rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
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
  );
}

export default QueuePage;