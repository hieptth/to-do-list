import { FormEvent, useState } from "react";

export const AddCard = (props: {
  addTask: (arg0: string, arg1: string) => void;
  showCard: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.addTask(title, desc);
    props.showCard();

    setTitle("");
    setDesc("");
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

        <div className="btnGroup">
          <div className="groupLeft">
            <i className="far fa-calendar-check">
              <span className="iconTxt">Due Date</span>
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
