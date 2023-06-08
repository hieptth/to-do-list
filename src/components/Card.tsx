import { format } from "date-fns";

interface taskObject {
  task: string;
  id: string;
  desc: string;
  date: Date;
  completed: boolean;
  isEditing: boolean;
}

export const Card = (props: {
  task: taskObject;
  toggleComplete: (arg0: string) => void;
  editTask: (arg0: string) => void;
  deleteTask: (arg0: string) => void;
}) => {
  let displayDate = new Date(props.task.date);
  let currentDate = format(displayDate, "PP");

  return (
    <>
      {(props.task.task !== "" || props.task.desc !== "") && (
        <>
          <div className="cardWrapper">
            <div className="checkMark">
              <input
                type="checkbox"
                name="completeBtn"
                checked={props.task.completed}
                onChange={() => props.toggleComplete(props.task.id)}
              />
            </div>
            <div
              className="taskCard"
              onClick={() => props.editTask(props.task.id)}
            >
              <div className="addCardTitle">
                <h3 className={`${props.task.completed ? "completed" : ""}`}>
                  {props.task.task}
                </h3>
              </div>
              <div className="addCardContent">
                <div className="desc">
                  <h5>
                    {props.task.desc.length > 50
                      ? props.task.desc.slice(0, 50) + " ..."
                      : props.task.desc.slice(0, 50)}
                  </h5>
                </div>
                <div className="moreDetails">
                  <i
                    className="far fa-calendar-check"
                    style={{
                      color: props.task.date > new Date() ? "red" : "green",
                    }}
                  >
                    <span className="iconTxt">{currentDate}</span>
                  </i>
                  <i className="fas fa-arrow-alt-circle-down">
                    <span className="iconTxt">Attachments</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};
