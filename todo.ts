'use strict';

import { Usage } from './usage';
import { TaskList } from './taskList';
import { Task } from './task';

let commandList: Usage = new Usage();
commandList.addArgument([['-l', 'Lists undone the tasks'], ['-la', 'Lists all the tasks'], ['-a', 'Adds a new task'], ['-r', 'Removes a task'], ['-c', 'Completes a task']]);

let myTasks: TaskList = new TaskList();

function validateIndex(index: string, taskList: TaskList): boolean {
  if (!index) {
    console.log(`Unable to remove: no index provided`);
    return false;
  }
  if (isNaN(parseInt(index))) {
    console.log(`Unable to remove: index is not a number`);
    return false;
  }
  taskList.readlistOfTasks();
  if (parseInt(index) > taskList.listOfTasks.length) {
    console.log(`Unable to remove: index is out of bound`);
    return false;
  }
  return true;
}

/* myTasks.addTask('Walk the dog');
myTasks.addTask('Buy milk');
myTasks.addTask('Do homework'); */

//console.log(myTasks);


if (!process.argv[2]) {
  let appName = 'Command Line Todo application';
  let pen: string = '';

  console.log(`${appName}\n${pen.padEnd(appName.length, '=')}\n\nCommand line arguments:`);
  commandList.printListOfArguments();

} else if (process.argv[2] === '-l') {
  myTasks.readlistOfTasks();
  let unDone: Task[] = myTasks.listOfTasks.filter(task => !task.taskIsDone)
  if (unDone.length === 0) {
    console.log(`No todos for today! :)`);
  } else {
    for (let i: number = 0; i < unDone.length; i++) {
      if (!unDone[i].taskIsDone) {
        console.log(`${i + 1} - ${unDone[i].task}`);
      }
    }
  }
} else if (process.argv[2] === '-la') {
  myTasks.readlistOfTasks();
  if (myTasks.listOfTasks.length === 0) {
    console.log(`No todos for today! :)`);
  } else {
    for (let i: number = 0; i < myTasks.listOfTasks.length; i++) {
      let checkMark: string = myTasks.listOfTasks[i].taskIsDone ? 'x' : ' ';
      console.log(`${i + 1} - [${checkMark}] ${myTasks.listOfTasks[i].task}`);
    }
  }
} else if (process.argv[2] === '-a') {
  if (!process.argv[3]) {
    console.log(`Unable to add: no task provided`);
  } else {
    let newTask: Task = new Task(process.argv[3]);
    myTasks.writeTask(newTask);
  }
} else if (process.argv[2] === '-r') {

  if (validateIndex(process.argv[3], myTasks)) {
    myTasks.listOfTasks.splice(parseInt(process.argv[3]) - 1, 1);
    myTasks.resetList();
    myTasks.listOfTasks.forEach(task => {
      myTasks.writeTask(task);
    });
  }
} else if (process.argv[2] === '-c') {
  if (validateIndex(process.argv[3], myTasks)) {
    myTasks.listOfTasks[parseInt(process.argv[3]) - 1].checkTask();
    myTasks.resetList();
    myTasks.listOfTasks.forEach(task => {
      myTasks.writeTask(task);
    });
  }
} else {
  console.log(`Unsupported argument`);
}
