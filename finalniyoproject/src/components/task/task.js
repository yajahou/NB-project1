import { useState } from "react";

function Task({ task, updateTaskStatusProps }) {
  const [editStatus, setEditStatus] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);

  const handleStatusChange = (newStatus) => {
    setUpdatedStatus(newStatus);
    updateTaskStatusProps(task.id, newStatus);
  };

  return (
    <section>
      <h4> {task.title}</h4>
      {task.description && <p>Description {task.description}</p>}
      <p>
        {" "}
        Status {task.status}{" "}
        <button onClick={() => setEditStatus(true)}>Edit status</button>
      </p>
      {editStatus && (
        <select
          value={updatedStatus}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="Select Progress">Select Progress</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>{" "}
        </select>
      )}

      {task.startDate && <p>Start Date {task.startDate}</p>}
      {task.endDate && <p>End Date {task.endDate}</p>}
      {task.priority && <p>Priority {task.priority}</p>}
      {task.allocatedUser && <p>User Allocation {task.allocatedUser}</p>}
    </section>
  );
}

export default Task;
