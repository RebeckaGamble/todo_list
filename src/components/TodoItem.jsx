import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";

const TodoItem = (props) => {
  const { text, task, handleComplete, handleDelete } = props;

  return (
    <div className="flex flex-row mx-auto w-[90%] max-w-[540px] text-black my-4 tracking-wide rounded-lg justify-between px-4 py-1.5 sm:py-2.5 text-[16px] sm:text-[20px] leading-5 border-slate-300 border-[3px] bg-white">
      {task.isCompleted ? (
        <div className="flex items-center">
          <button
            onClick={() => handleComplete()}
            className="flex w-6 h-6 justify-center items-center"
          >
            <ImCheckboxChecked size={24} className="fill-blue-300" />
          </button>
          <p className="ml-4 font-semibold line-through">{text}</p>
        </div>
      ) : (
        <div className="flex items-center">
          <button
            onClick={() => handleComplete()}
            className="flex bg-white w-6 h-6 border-[3.5px] border-purple-400 justify-center items-center"
          >
            <div />
          </button>
          <p className="ml-4 font-semibold no-underline">{text}</p>
        </div>
      )}
     
      <button onClick={() => handleDelete()}>
        <FaRegTrashCan size={20} className="fill-black" />
      </button>
    </div>
  );
};

export default TodoItem;
