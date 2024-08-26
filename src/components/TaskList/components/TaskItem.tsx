import React from "react";
import { ITask } from "../interfaces";

interface ITaskItemProps {
  task: ITask;
}

const TaskItem = (props: ITaskItemProps) => {
  const { task } = props;
  const { title, description, status } = task;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#fff",
        color: "#000",
        margin: 5
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'flex-start'
        }}
      >
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {status}
      </div>
    </div>
  );
};

export default TaskItem;
