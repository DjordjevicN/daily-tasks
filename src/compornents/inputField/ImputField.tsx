import React from "react";
import "./inputField.scss";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="input__box"
        type="text"
        placeholder="Enter new task"
      />
      <button className="input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
