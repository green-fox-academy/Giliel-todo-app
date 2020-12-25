'use strict';

import { Task } from './task';
import * as fs from 'fs';

export class TaskList {
  protected _listOfTasks: Task[] = [];
  protected _name: string;

  constructor(name?: string) {
    this._name = name ?? 'myTasks';
  }

  public writeTask(task: Task): void {
    try {
      fs.writeFileSync(`${this._name}.txt`, (`${task.task}\r\n${task.taskIsDone}\r\n`), { flag: 'a' });
    }
    catch (e) {
      console.log(`Unable to write file: ${this._name}.txt`);
    }
  }

  public resetList() {
    try {
      fs.writeFileSync(`${this._name}.txt`, (``));
    }
    catch (e) {
      console.log(`Unable to write file: ${this._name}.txt`);
    }
  }

  public get listOfTasks(): Task[] {
    return this._listOfTasks;
  }

  public readlistOfTasks(): void {
    let fileContent: string[] = [];

    try {
      fileContent = (fs.readFileSync(`${this._name}.txt`, 'utf-8').split('\r\n'));
    }
    catch (e) {
      console.log(`Unable to read file: ${this._name}.txt`);
    }

    for (let i = 0; i < fileContent.length - 1; i += 2) {
      let trueFalse: boolean = false;
      if (fileContent[i + 1] === 'true') {
        trueFalse = true;
      }
      this._listOfTasks.push(new Task(fileContent[i], trueFalse));
    }
  }
}
