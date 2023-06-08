import { format } from "date-fns";
import { FormEvent, SetStateAction, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface taskObject {
  task: string;
  id: string;
  desc: string;
  date: Date;
  completed: boolean;
  isEditing: boolean;
}

export const CardDetail = (props: {
  task: taskObject;
  editTask: (arg0: string, arg1: string, arg2: Date, arg3: string) => void;
  deleteTask: (arg0: string) => void;
}) => {
  const date = new Date();

  let defaultMonth = date.getMonth();
  let defaultYear = date.getFullYear();

  const [title, setTitle] = useState(props.task.task);
  const [desc, setDesc] = useState(props.task.desc);
  const [canceled, setCancelState] = useState(false);
  const [openDateSelect, setOpenDateSelect] = useState(false);
  const [selected, setSelected] = useState<Date>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title == "" && desc == "") {
      props.deleteTask(props.task.id);
    } else
      !canceled
        ? props.editTask(
            title,
            desc,
            selected !== undefined ? selected : props.task.date,
            props.task.id
          )
        : props.editTask(
            props.task.task,
            props.task.desc,
            props.task.date,
            props.task.id
          );

    setTitle("");
    setDesc("");
    setCancelState(false);
  };

  const handleDayPick = (e: SetStateAction<Date | undefined>) => {
    setSelected(e);
    setOpenDateSelect(false);
  };

  return (
    <>
      <div className="addCard">
        <form
          className="addTodoForm"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="addCardTitle"
            className="addCardTitle"
            placeholder="Task name here ..."
            maxLength={50}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            name="addCardDesc"
            className="addCardDesc"
            placeholder="Description ..."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          {openDateSelect && (
            <DayPicker
              mode="single"
              defaultMonth={new Date(defaultYear, defaultMonth)}
              selected={selected}
              onSelect={handleDayPick}
            />
          )}

          <div className="btnGroup">
            <div className="groupLeft">
              <i
                className="far fa-calendar-check"
                onClick={() => {
                  setOpenDateSelect(!openDateSelect);
                }}
              >
                <span className="iconTxt">
                  {selected ? format(selected, "PP") : "Change Date"}
                </span>
              </i>
              <i
                className="fas fa-trash"
                onClick={() => props.deleteTask(props.task.id)}
              >
                <span className="iconTxt">Delete</span>
              </i>
            </div>
            <div className="groupRight">
              <button
                type="submit"
                className="cancelBtn"
                onClick={() => {
                  setCancelState(true);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="addTaskBtn">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
