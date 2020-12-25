'use strict';

export class Argument {
  protected _command: string;
  protected _whatItDoes: string;

  constructor(command: string, whatItDoes: string) {
    this._command = command;
    this._whatItDoes = whatItDoes;
  }

  public get argumentInfo(): string {
     return `${this._command.padEnd(5,' ').padStart(9, ' ')}${this._whatItDoes}`;
  }
}
