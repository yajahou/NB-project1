import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false); //this will handle when the form should show
  const [taskLists, setTaskLists] = useState([]);
  const handleCloseForm = () => {
    //this closes the form
    setShowForm(false);
  };
  const handleNewTask = (formData) => {
    //and new task to the tasklists state
    setTaskLists([...taskLists, formData]);
    console.log(formData);
  };
  const updateTaskStatus = (id, newStatus) => {
    const updatedTasks = taskLists.map((task) =>
      task.id === id ? { ...taskLists, status: newStatus } : task
    );
    setTaskLists(updatedTasks);
  };
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add new task</button>
      {showForm ? (
        <TaskForm
          closeFormProps={handleCloseForm}
          addTaskProps={handleNewTask}
        />
      ) : (
        <TaskList
          arrayOfTasks={taskLists}
          updateTaskStatusProps={updateTaskStatus}
        />
      )}
    </div>
  );
}

export default App;
