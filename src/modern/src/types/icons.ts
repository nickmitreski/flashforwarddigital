import { Win95IconName } from '../utils/win95Icons';

export interface IconPosition {
  x: number;
  y: number;
}

export interface Win95IconConfig {
  icon: Win95IconName;
  label: string;
  depth: number;
  position: IconPosition;
  size: number;
}