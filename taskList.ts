'use strict';

import { Task } from './task';
import * as fs from 'fs';

export class TaskList {
  protected _listOfTasks: Task[] = [];

  protected proba;

  public addTask(task: string): void {
    let newTask: Task = new Task(task);
    this._listOfTasks.push(newTask);
    try {
      fs.writeFileSync('myTasks.txt', (`${task},false\n`), { flag: 'a' });
    }
    catch (e) {
      console.log(e);
      console.log('Unable to write file: myTasks.txt');
    }
  }

  public readlistOfTasks(): void {
    try {


      //this._listOfTasks =

      this.proba = (fs.readFileSync('myTasks.txt', 'utf-8').split('\n'));


      let object = (this.proba[0].split(','));
      console.log(object);
      console.log(this.proba[1]);
      //console.log(this._listOfTasks);
    }
    catch (e) {
      console.log('Unable to read file: myTasks.txt');
      console.log(e)


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







}
