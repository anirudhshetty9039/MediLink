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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Doctor Queue
      </h1>

      <div className="grid gap-4">
        {queue.map((entry) => (
          <div
            key={entry._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              Token #{entry.tokenNumber}
            </h2>

           <p>Name: {entry.patientId?.name || "Deleted Patient"}</p>
            <p>Age: {entry.patientId?.age || "-"}</p>
            <p>Village: {entry.patientId?.village || "-"}</p>

           <div className="mt-2">
  <span className="font-semibold">
    Status: {entry.status}
  </span>
</div>

<div className="mt-4 flex gap-2">
  <button
    onClick={() =>
      handleStatusChange(
        entry._id,
        "in-progress"
      )
    }
    className="bg-yellow-500 text-white px-3 py-2 rounded"
  >
    Start
  </button>

  <button
    onClick={() =>
      handleStatusChange(
        entry._id,
        "completed"
      )
    }
    className="bg-green-600 text-white px-3 py-2 rounded"
  >
    Complete
  </button>
  <button
  onClick={() => handleDeleteQueue(entry._id)}
  className="bg-red-600 text-white px-3 py-2 rounded"
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

export default QueuePage;