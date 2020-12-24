'use strict';

import { Task } from './task';
import * as fs from 'fs';

export class TaskList {
  private _listOfTasks: Task[] = [];

  public writeTask(task: Task): void {
    try {
      fs.writeFileSync('myTasks.txt', (`${task.task}\r\n${task.taskIsDone}\r\n`), { flag: 'a' });
    }
    catch (e) {
      console.log('Unable to write file: myTasks.txt');
    }
  }

  public resetList() {
    try {
      fs.writeFileSync('myTasks.txt', (``));
    }
    catch (e) {
      console.log('Unable to write file: myTasks.txt');
    }
  }

  public get listOfTasks(): Task[] {
    return this._listOfTasks;
  }

  public readlistOfTasks(): void {
    let fileContent: string[] = [];

    try {
      fileContent = (fs.readFileSync('myTasks.txt', 'utf-8').split('\r\n'));
    }
    catch (e) {
      console.log('Unable to read file: myTasks.txt');
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


  /*     public addTask(task: string): void {
        this._listOfTasks.push(...[new Task(task)]);
         try {
          fs.writeFileSync('myTasks.txt', '');
          this._listOfTasks.forEach((element: Task) => fs.writeFileSync('myTasks.txt', (JSON.stringify(element) + '\n'), {flag: 'a'}));
        }
        catch (e) {
          console.log(e);
          console.log('Unable to write file: myTasks.txt');
        }
      } */







