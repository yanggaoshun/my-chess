import { EChessCamp } from '../enum/chess';

export interface IRenderChessPieceProps {
  checked?: boolean;
  children?: React.ReactNode;
  size?: number;
  x?: number;
  y?: number;
  camp?: EChessCamp;
  onSelected?: () => void;
}

export interface ICheckOtherRulesParams {
  calculatedPosition: 'x' | '-x' | 'y' | '-y';
  start: number;
  end: number;
  i: number;
}
