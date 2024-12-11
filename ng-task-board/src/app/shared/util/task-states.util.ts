export type TaskStatus = 'blocked' | 'progress' | 'todo' | 'done';

export const TASK_STATES: Record<string, TaskStatus> = {
  TODO: 'todo',
  PROGRESS: 'progress',
  BLOCKED: 'blocked',
  DONE: 'done',
};

export const TASK_IMAGES: Record<string, string> = {
  todo: 'add_round_duotone.svg',
  progress: 'time_atack_duotone.svg',
  done: 'done_round_duotone.svg',
  blocked: 'close_ring_duotone.svg',
};
