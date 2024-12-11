import { TaskStatus } from '../shared/util/task-states.util';

export interface Task {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: TaskStatus;
}
