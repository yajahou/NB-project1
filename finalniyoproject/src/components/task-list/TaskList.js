import React, { useState } from "react";
import Task from "../task/task";

function TaskList({ arrayOfTasks, updateTaskStatusProps }) {
  const [showDone, setShowDone] = useState(false); // Manage visibility of completed tasks
  const doneTasks = arrayOfTasks.filter((task) => task.status === "Done"); // Filter completed tasks

  // return for empty task array
  if (arrayOfTasks.length === 0) {
    return <h1>No Tasks Yet</h1>;
  }

  return (
    <section>
      <h1>My Tasks</h1>
      <button onClick={() => setShowDone(!showDone)}>
        {showDone ? "Show All Tasks" : "Show Done Tasks"}
      </button>
      {showDone
        ? doneTasks.map((task) => <Task key={task.id} task={task} />)
        : arrayOfTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              updateTaskStatusProps={updateTaskStatusProps}
            />
          ))}
    </section>
  );
}

export default TaskList;
/*[
  {
    is:1,
    title: "Task One",
    description: "This is a sample Task",
    status: "In progress",
    priority: "Medium",
  },
  {
    id:2,
    title: "Task Two",
    description: "This is another sample task",
    status: "Not started",
    priority: "Low",
  },
];
*/
