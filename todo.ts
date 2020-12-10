'use strict';

import { Usage } from './usage';

let commandList: Usage = new Usage();

commandList.addArgument([['-l', 'Lists all the tasks'], ['-a', 'Adds a new task'], ['-r', 'Removes a task'], ['-c', 'Completes a task']]);

let appName = 'Command Line Todo application';
let pen: string = '=';

for (let i: number = 0; i < appName.length; i++) {
  pen += '=';
}

console.log(`${appName}\n${pen}\n\nCommand line arguments:`);
commandList.printListOfArguments();
