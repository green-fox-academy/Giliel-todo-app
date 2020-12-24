'use strict';

import { Task } from './task';
import * as fs from 'fs';

export class TaskList {
  protected _listOfTasks: Task[] = [];

  public addTask(task: string): void {
    let newTask: Task = new Task(task);
    try {
      fs.writeFileSync('myTasks.txt', (`${task}\r\n${newTask.taskIsDone}\r\n`), { flag: 'a' });
    }
    catch (e) {
      console.log('Unable to write file: myTasks.txt');
    }
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
    console.log(this._listOfTasks);
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







}
