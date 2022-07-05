import React, { useState } from "react";
import "./App.scss";
import InputField from "./compornents/inputField/ImputField";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  console.log(allTasks);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setAllTasks([...allTasks, { id: Date.now(), task, isDone: false }]);
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <h2>Daily tasks</h2>
      </div>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
