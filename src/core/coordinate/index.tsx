import { useUpdate, useMount } from 'ahooks';
import { v4 as uuid } from 'uuid';
import Render from '../chess-pieces/render';

import { IRenderChessPieceProps } from '@/types/interface';
import { Point } from '@/types';

export default class Coordinate {
  x: number = 0;

  y: number = 0;

  size: number = 1;

  checked: boolean = true;

  id: string = uuid();

  private _update?: () => void;

  constructor(point: Partial<Point>) {
    point[0] && this.moveX(point[0]);
    point[1] && this.moveY(point[1]);
  }

  moveX(x: number) {
    this.x = x;
    return this;
  }

  moveY(y: number) {
    this.y = y;
    return this;
  }

  getCoordinate(): Point {
    return [this.x, this.y];
  }

  private setUpdate(update: () => void) {
    this._update = update;
    return this;
  }

  update() {
    this._update?.();
  }

  protected getValue() {
    return this;
  }

  render = (renderProps: IRenderChessPieceProps) => {
    const update = useUpdate();
    useMount(() => this.setUpdate(update));
    return <Render {...this.getValue()} {...renderProps} />;
  };
}
