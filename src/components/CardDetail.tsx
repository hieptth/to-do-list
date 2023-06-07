import { FormEvent, useState } from "react";

interface taskObject {
  task: string;
  id: string;
  desc: string;
  completed: boolean;
  isEditing: boolean;
}

export const CardDetail = (props: {
  task: taskObject;
  editTask: (arg0: string, arg1: string, arg2: string) => void;
  deleteTask: (arg0: string) => void;
}) => {
  const [title, setTitle] = useState(props.task.task);
  const [desc, setDesc] = useState(props.task.desc);
  const [canceled, setCancelState] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title == "" && desc == "") {
      console.log("ran");
      props.deleteTask(props.task.id);
    } else !canceled && props.editTask(title, desc, props.task.id);

    setTitle("");
    setDesc("");
    setCancelState(false);
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

          <div className="btnGroup">
            <div className="groupLeft">
              <i className="far fa-calendar-check">
                <span className="iconTxt">Change Date</span>
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
