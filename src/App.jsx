import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  //add task pressing enter
  function handleEnterKey(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function addTask() {
    if (!text.trim()) {
      //no empty tasks created
      return;
    }

    const newTask = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: text,
        isCompleted: false,
      },
    ];
    setTasks(newTask);

    setText(""); //empty the input field after adding task
  }

  //delete task by id
  function handleDelete(taskId) {
    const removeTask = tasks.filter((task) => task.id !== taskId);
    setTasks(removeTask);
  }

  //toggle done/not done
  function toggleComplete(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  const taskCount = tasks.length;
  const compTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <h1 className="custom-gradient-text flex justify-center font-bold text-3xl my-6 md:text-5xl md:my-10">
        My Todos
      </h1>
      <div className="flex flex-col justify-center my-6 mx-auto w-[90%] max-w-[540px] sm:text-[20px]">
        <div className="flex">
          <input
            type="text"
            placeholder="Add new task.."
            value={text}
            onKeyDown={handleEnterKey}
            onChange={handleChange}
            className="flex-grow border border-white px-3 py-2 rounded-l-md focus:outline-none text-black placeholder:text-slate-400 focus:border-purple-500"
          />
          <button
            onClick={addTask}
            className="border border-white tracking-wider px-6 py-2 rounded-r-md hover:border-purple-500"
          >
            Add
          </button>
        </div>
        <div className="flex justify-between font-semibold mt-6 mb-[-10px]">
          <h3 className="text-purple-500">Tasks: {taskCount} </h3>
          <h3 className="text-blue-300">
            Completed Tasks: {compTasks} of {taskCount}
          </h3>
        </div>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          text={task.text}
          handleComplete={() => toggleComplete(task.id)}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </>
  );
}

export default App;
