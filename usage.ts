'use strict';

import { Argument } from './argument';

export class Usage {
  public _listOfArguments: Argument[] = [];

  public addArgument(argument: string[][]): void {
    for (let i: number = 0; i < argument.length; i++) {
      this._listOfArguments.push(...[new Argument(argument[i][0], argument[i][1])]);
    }
  }

  public printListOfArguments(): void {
    this._listOfArguments.forEach((argument: Argument) => console.log(argument.argumentInfo));
  }
}
