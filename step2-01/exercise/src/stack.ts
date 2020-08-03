// TODO: create a Stack<T> generic class here:

export class Stack<T> {
  private _stacc: T[];

  constructor() {
    this._stacc = [];
  }

  push(elem: T): void {
    this._stacc.push(elem);
  }

  pop(): T {
    return this._stacc.pop();
  }
}

//export default {};

// export class Stack<T> {
//   push(...) { ... }
//   pop(...) { ... }
// }
