export class Cell {
  constructor() { }

  private _status: number
  private _x: number;
  private _y: number;

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get x() {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }

}
