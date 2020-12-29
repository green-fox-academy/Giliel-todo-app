'use strict';

export class Task {
  protected _task: string;
  protected _taskIsDone: boolean;

  constructor(task: string, taskIsDone?: boolean) {
    this._task = task;
    this._taskIsDone = taskIsDone ?? false;
  }

  public get task(): string {
    return this._task;
  }

  public set task(value: string) {
    this._task = value;
  }

  public get taskIsDone(): boolean {
    return this._taskIsDone;
  }

  public checkTask(): void {
    this._taskIsDone = true;
  }
}
