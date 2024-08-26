import React, { useCallback, useMemo, useState } from "react";
import { ITask, TaskStatus } from "../TaskList/interfaces";

const AddOrUpdateTask = (props: {
  task?: ITask;
  handleSubmit: (data: ITask) => void;
}) => {
  const { handleSubmit } = props;
  const [taskInfo, setTaskInfo] = useState<ITask>({
    category: "",
    description: "",
    id: 0,
    status: TaskStatus.pending,
    title: "",
  });

  const onChangeTask = useCallback(
    (key: "title" | "description" | "category", value: string) => {
      setTaskInfo((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const isInvalid = useMemo(
    () => taskInfo.title.length === 0 || taskInfo.description.length === 0,
    [taskInfo.title.length, taskInfo.description.length]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <input
        placeholder="title"
        value={taskInfo.title}
        onChange={(e) => onChangeTask("title", e.target.value)}
      />
      <input
        placeholder="description"
        value={taskInfo.description}
        onChange={(e) => onChangeTask("description", e.target.value)}
      />
      <input
        placeholder="category"
        value={taskInfo.category}
        onChange={(e) => onChangeTask("category", e.target.value)}
      />
      <button disabled={isInvalid} onClick={() => handleSubmit(taskInfo)}>
        + Add
      </button>
    </div>
  );
};

export default AddOrUpdateTask;
