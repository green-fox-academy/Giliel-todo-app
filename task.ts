'use strict';

export class Task {
  protected _task: string;
  protected _taskIsDone: boolean;

  constructor(task: string) {
    this._task = task;
    this._taskIsDone = false;
  }

  public checkTask(task: Task): void {
    task._taskIsDone = true;
  }
}
