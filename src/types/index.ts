// Re-export all types
export * from './ui';
export * from './events';
export * from './models';
export * from './retro';
export * from './modern';

// Type utilities
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type NonNullable<T> = T extends null | undefined ? never : T;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// Utility types for props
export type PropsWithClassName<P = unknown> = P & { className?: string };
export type PropsWithChildren<P = unknown> = P & { children?: React.ReactNode };
export type PropsWithStyle<P = unknown> = P & { style?: React.CSSProperties };

// Utility type for ref forwarding
export type ForwardRefComponent<P = unknown, T = unknown> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>; 