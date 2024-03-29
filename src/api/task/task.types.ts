import type { Task } from './task.entity';
import type { BoardModel } from '../board/board.types';

export type TaskModel = Omit<Task, 'createdAt' | 'updatedAt'>;

type TaskWithoutRelations = Omit<TaskModel, 'board'>;

type BoardFk = { boardId: BoardModel['id'] };

export type CreateTaskPayload = Pick<TaskModel, 'name'> & BoardFk;

export type GetManyTasksQuery = Partial<Pick<TaskModel, 'name' | 'isCompleted'> & BoardFk>;

export type GetManyTasksPayload = Partial<Omit<TaskWithoutRelations, 'id'>> & {
  board?: Partial<TaskModel['board']>;
};

export type GetTaskByPayload = Pick<TaskModel, 'id'> | Pick<TaskModel, 'name'>;

export type UpdateTaskPayload = Partial<Omit<TaskWithoutRelations, 'id'> & BoardFk>;
