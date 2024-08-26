import { useCallback, useState } from "react";
import { ITask } from "../interfaces";
import seedTasks from "../../../seed";
import { useDebounce } from "../../../commmon/hooks/useDebounce";

const useTasks = () => {
  const [componentState, setComponentState] = useState<{
    taskList: ITask[];
    showAddTaskModal: boolean;
    searchText: string;
  }>({
    taskList: seedTasks,
    showAddTaskModal: false,
    searchText: "",
  });

  const handleToggleAddTaskModal = useCallback((value?: boolean) => {
    setComponentState((prev) => ({
      ...prev,
      showAddTaskModal: value ?? !prev.showAddTaskModal,
    }));
  }, []);

  const handleAddNewTask = useCallback(
    (item: ITask) => {
      const newItem = {
        ...item,
        id: crypto.randomUUID(),
      };
      handleToggleAddTaskModal();
      setComponentState((prev) => ({
        ...prev,
        taskList: [newItem, ...prev.taskList],
      }));
    },
    [handleToggleAddTaskModal]
  );

  const handleDebouncedSearch = useDebounce((data: string) => {
    setComponentState((prev) => ({
      ...prev,
      searchText: data,
    }));
  });

  const handleSeach = (data: string) => {
    handleDebouncedSearch(data);
  };

  console.log(componentState.searchText);

  return {
    ...componentState,
    handleToggleAddTaskModal,
    handleAddNewTask,
    handleSeach,
  };
};

export default useTasks;
