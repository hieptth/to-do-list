import { format } from "date-fns";
import { FormEvent, SetStateAction, useState } from "react";
import { DayPicker } from "react-day-picker";

export const AddCard = (props: {
  addTask: (arg0: string, arg1: string, arg2: Date) => void;
  showCard: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [openDateSelect, setOpenDateSelect] = useState(false);
  const [selected, setSelected] = useState<Date>();

  const date = new Date();

  let defaultMonth = date.getMonth();
  let defaultYear = date.getFullYear();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.addTask(title, desc, selected ? selected : new Date());
    props.showCard();

    setTitle("");
    setDesc("");
  };

  const handleDayPick = (e: SetStateAction<Date | undefined>) => {
    setSelected(e);
    setOpenDateSelect(false);
  };

  return (
    <>
      <form className="addTodoForm" onSubmit={handleSubmit} autoComplete="off">
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
            <i className="far fa-plus">
              <span className="iconTxt">Add File</span>
            </i>
          </div>
          <div className="groupRight">
            <button className="cancelBtn" onClick={props.showCard}>
              Cancel
            </button>
            <button type="submit" className="addTaskBtn">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
