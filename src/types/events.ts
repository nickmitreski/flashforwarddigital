import { MouseEvent, ChangeEvent, KeyboardEvent } from 'react';

// Generic callback types
export type VoidFunction = () => void;
export type CallbackFunction<T> = (value: T) => void;
export type AsyncCallbackFunction<T> = (value: T) => Promise<void>;

// Event handler types
export type MouseHandler = (event: MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type KeyboardHandler = (event: KeyboardEvent<HTMLElement>) => void;

// Drag and drop event types
export interface DragEventHandlers {
  onDragStart?: (event: MouseEvent<HTMLElement>) => void;
  onDragEnd?: (event: MouseEvent<HTMLElement>) => void;
  onDragOver?: (event: MouseEvent<HTMLElement>) => void;
  onDrop?: (event: MouseEvent<HTMLElement>) => void;
}

// Window event handlers
export interface WindowEventHandlers {
  onResize?: VoidFunction;
  onScroll?: VoidFunction;
  onFocus?: VoidFunction;
  onBlur?: VoidFunction;
}

// Form event types
export interface FormEventHandlers {
  onSubmit?: (data: unknown) => void | Promise<void>;
  onReset?: VoidFunction;
  onChange?: (field: string, value: unknown) => void;
  onBlur?: (field: string) => void;
}

// Generic state update handler
export type SetStateCallback<T> = (prevState: T) => T;
export type SetStateAction<T> = T | SetStateCallback<T>;
export type SetState<T> = (action: SetStateAction<T>) => void; 