import { useState } from "react";
import "./App.scss";
import InputField from "./compornents/inputField/ImputField";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");

  return (
    <div className="App">
      <div className="heading">
        <h2>Daily tasks</h2>
      </div>
      <InputField task={task} setTask={setTask} />
    </div>
  );
};

export default App;
