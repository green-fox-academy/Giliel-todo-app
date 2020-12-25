'use strict';

import { Usage } from './usage';
import { TaskList } from './taskList';
import { Task } from './task';

let commandList: Usage = new Usage();
commandList.addArgument([['-l', 'Lists undone the tasks'], ['-la', 'Lists all the tasks'], ['-a', 'Adds a new task'], ['-r', 'Removes a task'], ['-c', 'Completes a task'], ['-lu', 'List users'], ['-ru', 'Remove user'], ['[-u]', 'Select user for this operation']]);

let myTasks: TaskList = new TaskList();

if (process.argv[process.argv.length - 2] === '-u') {
  myTasks = new TaskList(process.argv[process.argv.length - 1]);
  process.argv.splice(process.argv.length - 2, 2);
}

function validateIndex(index: string, taskList: TaskList): boolean {
  if (!index) {
    console.log(`Unable to remove: no index provided`);
    return false;
  }
  if (isNaN(parseInt(index))) {
    console.log(`Unable to remove: ${index} is not a number`);
    return false;
  }
  if (taskList.listOfTasks.length === 0) {
    taskList.readlistOfTasks();
  }
  if (parseInt(index) > taskList.listOfTasks.length) {
    console.log(`Unable to remove: index ${index} is out of bound`);
    return false;
  }
  return true;
}

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
    for (let i: number = 3; i < process.argv.length; i++) {
      let newTask: Task = new Task(process.argv[i]);
      myTasks.writeTask(newTask);
    }
  }
} else if (process.argv[2] === '-r') {
  for (let i: number = 3; i < process.argv.length; i++) {
    if (validateIndex(process.argv[i], myTasks)) {
      myTasks.listOfTasks[parseInt(process.argv[i]) - 1].task = '';
    }
  }
  let remainingTask: Task[] = myTasks.listOfTasks.filter(task => task.task !== '');
  myTasks.resetList();
  remainingTask.forEach(task => {
    myTasks.writeTask(task);
  });
} else if (process.argv[2] === '-c') {
  for (let i: number = 3; i < process.argv.length; i++) {
    if (validateIndex(process.argv[i], myTasks)) {
      myTasks.listOfTasks[parseInt(process.argv[i]) - 1].checkTask();
    }
  }
  myTasks.resetList();
  myTasks.listOfTasks.forEach(task => {
    myTasks.writeTask(task);
  });
} else if (process.argv[2] === '-lu') {
  myTasks.listUsers();
} else if (process.argv[2] === '-ru') {
  myTasks.removeUser(process.argv[3]);
} else {
  console.log(`Unsupported argument`);
}
