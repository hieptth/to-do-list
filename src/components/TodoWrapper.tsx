import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "./Card";
import { AddCard } from "./AddCard";
import { CardDetail } from "./CardDetail";
uuidv4();

export const TodoWrapper = () => {
  interface todoObject {
    id: string;
    task: string;
    desc: string;
    date: Date;
    completed: boolean;
    isEditing: boolean;
  }

  const [showCard, setShowCard] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (tasks.length !== 0) return tasks;
    else
      return [
        {
          id: uuidv4(),
          task: "Let's get started",
          desc: "Click here to edit description",
          date: new Date(),
          completed: false,
          isEditing: false,
        },
      ];
  });

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const displayCard = () => {
    setShowCard(!showCard);
  };

  const addTask = (task: string, desc: string, date: Date) => {
    (task !== "" || desc !== "") &&
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          task: task,
          desc: desc,
          date: date,
          completed: false,
          isEditing: false,
        },
      ]);
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task: todoObject) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task: todoObject) => task.id !== id));
  };

  const editTask = (id: string) => {
    setTasks(
      tasks.map((task: todoObject) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
    console.log("edited");
  };

  const editContent = (
    content: string,
    desc: string,
    date: Date,
    id: string
  ) => {
    setTasks(
      tasks.map((task: todoObject) =>
        task.id === id
          ? {
              ...task,
              task: content,
              desc: desc,
              date: date,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <div className="card">
        <div className="cardTitle">
          <p>
            Todo<span id="taskCount">{tasks.length}</span>
          </p>
          <button className="addTaskBtn" onClick={displayCard}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <hr></hr>
        {showCard && (
          <div className="addCard">
            <AddCard addTask={addTask} showCard={displayCard} />
          </div>
        )}
        <div className="cardContent">
          {tasks.map((task: todoObject) =>
            task.isEditing ? (
              <CardDetail
                key={task.id}
                task={task}
                editTask={editContent}
                deleteTask={deleteTask}
              />
            ) : (
              <Card
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
