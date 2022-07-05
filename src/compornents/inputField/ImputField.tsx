import React from "react";
import "./inputField.scss";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ task, setTask }) => {
  return (
    <form className="input">
      <input className="input__box" type="text" placeholder="Enter new task" />
      <button className="input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
