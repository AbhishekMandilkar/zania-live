import React from "react";
import useTasks from "./hooks/useTasks";
import TaskItem from "./components/TaskItem";
import Modal from "../Modal/Modal";
import AddOrUpdateTask from "../AddOrUpdateTask/AddOrUpdateTask";

const TaskList = () => {
  const {
    taskList,
    searchText,
    showAddTaskModal,
    handleToggleAddTaskModal,
    handleAddNewTask,
    handleSeach
  } = useTasks();
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
      {searchText}
      <input onChange={(e) => handleSeach(e.target.value)}/>
      <button onClick={() => handleToggleAddTaskModal()}>Add new</button>
      <div>
        {taskList.map((taskItem) => (
          <TaskItem task={taskItem} key={taskItem.id} />
        ))}
      </div>
      {showAddTaskModal && (
        <Modal handleClose={() => handleToggleAddTaskModal(false)}>
          <AddOrUpdateTask handleSubmit={handleAddNewTask} />
        </Modal>
      )}
    </div>
  );
};

export default TaskList;
