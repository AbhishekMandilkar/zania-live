import { ITask, TaskStatus } from "./components/TaskList/interfaces";

const seedTasks: ITask[] = [
  {
    id: 1,
    category: "Shopping",
    title: "Shopping",
    status: TaskStatus.pending,
    description: `Get essentials from Trader Joe's`,
  },
  {
    id: 2,
    category: "Shopping",
    title: "Shoes",
    status: TaskStatus.pending,
    description: "Purchase running shoes",
  },
  {
    id: 3,
    category: "Work",
    title: "Presentation",
    status: TaskStatus.pending,
    description: "Create slides for team meeting",
  },
  {
    id: 4,
    category: "Work",
    title: "Review",
    status: TaskStatus.pending,
    description: "Review frontend team's pull request",
  },
  {
    id: 5,
    category: "Home",
    title: "Garage",
    status: TaskStatus.pending,
    description: "Organize tools and discard unnecessary items",
  },
  {
    id: 6,
    category: "Home",
    title: "Plants",
    status: TaskStatus.pending,
    description: "Water indoor and outdoor plants",
  },
  {
    id: 7,
    category: "Health",
    title: "Exercise",
    status: TaskStatus.pending,
    description: "Complete 30-minute yoga session",
  },
  {
    id: 8,
    category: "Health",
    title: "Appointment",
    status: TaskStatus.pending,
    description: "Visit dentist for routine",
  },
];

export default seedTasks;
