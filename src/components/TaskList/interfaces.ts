

export enum TaskStatus {
  pending = "pending",
  done = "done",
}

export interface ITask {
  id: number | string;
  category: string;
  title: string;
  status: TaskStatus;
  description: string;
}

