'use strict';

import { Usage } from './usage';
import { TaskList } from './taskList';


// Arguments //////////////////////
let commandList: Usage = new Usage();

commandList.addArgument([['-l', 'Lists all the tasks'], ['-a', 'Adds a new task'], ['-r', 'Removes a task'], ['-c', 'Completes a task']]);

let appName = 'Command Line Todo application';
let pen: string = '=';

for (let i: number = 0; i < appName.length; i++) {
  pen += '=';
}

console.log(`${appName}\n${pen}\n\nCommand line arguments:`);
commandList.printListOfArguments();

// End of Arguments //////////////////////

// Tasklist //////////////////////////////

let myTasks: TaskList = new TaskList();

myTasks.addTask('Walk the dog');
myTasks.addTask('Buy milk');
myTasks.addTask('Do homework');

//console.log(myTasks);

myTasks.readlistOfTasks();











/* console.log(process.argv);

if (process.argv[2] === '-l') {
  console.log('Here comes the discription');
  } else if (process.argv[2] === '-a') {
    console.log('adds task');
  }
  else {
    console.log('I dont know what to do');
  } */