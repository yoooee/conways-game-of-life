export class Cell {
  constructor() { }

  private _status: number
  private _x: number;
  private _y: number;

  get status(): number {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }

  get x(): number {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y(): number {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }

}
