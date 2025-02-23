import React from 'react';
import { IconConfig, Win95IconConfig } from '../types/icons';
import { Win95Icon } from '../components/Win95Icon';

export const FIXED_ICONS: Omit<Win95IconConfig, 'position'>[] = [
  {
    icon: 'computer',
    label: 'My Computer',
    depth: 2,
    size: 1.4
  },
  {
    icon: 'folder',
    label: 'My Documents',
    depth: 3,
    size: 1.3
  },
  {
    icon: 'recycleEmpty',
    label: 'Recycle Bin',
    depth: 2,
    size: 1.3
  },
  {
    icon: 'internetExplorer',
    label: 'Internet Explorer',
    depth: 3,
    size: 1.3
  }
];

export const RANDOM_ICONS: Omit<Win95IconConfig, 'position'>[] = [
  {
    icon: 'network',
    label: 'Network Neighborhood',
    depth: 4,
    size: 1.5
  },
  {
    icon: 'msdos',
    label: 'MS-DOS Prompt',
    depth: 3,
    size: 1.2
  },
  {
    icon: 'settings',
    label: 'Control Panel',
    depth: 2,
    size: 1.1
  },
  {
    icon: 'notepad',
    label: 'Notepad',
    depth: 3,
    size: 1.1
  },
  {
    icon: 'paint',
    label: 'Paint',
    depth: 4,
    size: 1.3
  },
  {
    icon: 'help',
    label: 'Help',
    depth: 5,
    size: 1.2
  },
  {
    icon: 'textFile',
    label: 'README.TXT',
    depth: 3,
    size: 1.2
  },
  {
    icon: 'folder',
    label: 'Program Files',
    depth: 4,
    size: 1.3
  },
  {
    icon: 'folder',
    label: 'Windows',
    depth: 3,
    size: 1.3
  },
  {
    icon: 'shell167',
    label: 'Minesweeper',
    depth: 5,
    size: 1.2
  }
];