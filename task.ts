'use strict';

export class Task {
  protected _task: string;
  protected _taskIsDone: boolean;

  constructor(task: string, taskIsDone?: boolean) {
    this._task = task;
    this._taskIsDone = taskIsDone ?? false;
  }

  public get taskIsDone(): boolean {
    return this._taskIsDone;
  }

  public checkTask(task: Task): void {
    task._taskIsDone = true;
  }

  
}
