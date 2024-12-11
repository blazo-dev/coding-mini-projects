import { Task } from "./task.model";

export interface Board {
    id: number;
    name: string;
    description: string;
    tasks: Task[];
}
