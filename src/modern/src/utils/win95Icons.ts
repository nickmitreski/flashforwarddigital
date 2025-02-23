import {
  Computer2,
  Folder,
  FileText,
  FilePin,
  Print,
  HelpBook,
  Settings,
  Network2,
  MsDos,
  Notepad,
  RecycleFull,
  RecycleEmpty,
  Explore,
  Mshtml32534,
  Shell32167,
} from '@react95/icons'

export const win95Icons = {
  // System Icons
  computer: Computer2,
  folder: Folder,
  recycleEmpty: RecycleEmpty,
  recycleFull: RecycleFull,
  explorer: Explore,
  settings: Settings,
  network: Network2,
  msdos: MsDos,
  help: HelpBook,

  // File Type Icons
  textFile: FileText,
  notepad: Notepad,

  // Media Icons
  paint: Print,
  imageFile: FilePin,

  // Program Icons
  internetExplorer: Mshtml32534,

  // Shell Icons
  shell167: Shell32167,
}

export type Win95IconName = keyof typeof win95Icons 