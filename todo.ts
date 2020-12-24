'use strict';

import { Usage } from './usage';
import { TaskList } from './taskList';
import { Task } from './task';

// Arguments //////////////////////
let commandList: Usage = new Usage();

commandList.addArgument([['-l', 'Lists all the tasks'], ['-a', 'Adds a new task'], ['-r', 'Removes a task'], ['-c', 'Completes a task']]);

// End of Arguments //////////////////////

// Tasklist //////////////////////////////

let myTasks: TaskList = new TaskList();

/* myTasks.addTask('Walk the dog');
myTasks.addTask('Buy milk');
myTasks.addTask('Do homework'); */

//console.log(myTasks);


if (!process.argv[2]) {
  let appName = 'Command Line Todo application';
  let pen: string = '';

  for (let i: number = 0; i < appName.length; i++) {
    pen += '=';
  }
  console.log(`${appName}\n${pen}\n\nCommand line arguments:`);
  commandList.printListOfArguments();

} else if (process.argv[2] === '-l') {
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
  myTasks.readlistOfTasks();
  myTasks.listOfTasks.splice(parseInt(process.argv[3]) - 1, 1);
  myTasks.resetList();
  myTasks.listOfTasks.forEach(task => {
    myTasks.writeTask(task);
  });

} else if (process.argv[2] === '-c') {
  console.log('complete task');
} else {
  console.log('I dont know what to do');
}
