import { useState } from "react";

function TaskForm({ closeFormProps, addTaskProps }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [allocatedUser, setAllocatedUser] = useState("");

  const randomNumberGenerator = () => {
    return Math.random() * 1000;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: randomNumberGenerator(),
      title: title,
      description: description,
      status: status,
      startDate: startDate,
      endDate: endDate,
      priority: priority,
      allocatedUser: allocatedUser, // Include the allocated user in the task object
    };
    console.log(newTask);
    addTaskProps(newTask);
    closeFormProps();
  };

  return (
    <section>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task-title">Task Title</label>
          <br />
          <input
            type="text"
            value={title}
            id="task-title"
            placeholder="Add the task title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="task-description">Task Description</label>
          <br />
          <textarea
            rows="3"
            value={description}
            id="task-description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="task-status">Status</label>
          <select
            id="task-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Select Progress">Select Progress</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="task-start-date">Start Date</label>
          <br />
          <input
            type="date"
            value={startDate}
            id="task-start-date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="task-end-date">End Date</label>
          <br />
          <input
            type="date"
            value={endDate}
            id="task-end-date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select a priority level</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="user-allocation">User Allocation</label>
          <select
            id="user-allocation"
            value={allocatedUser}
            onChange={(e) => setAllocatedUser(e.target.value)}
          >
            <option value="">Select a user</option>
            <option value="Jahou">Jahou</option>
            <option value="Sam">Sam</option>
            <option value="Neneh">Neneh</option>
          </select>
        </div>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default TaskForm;
