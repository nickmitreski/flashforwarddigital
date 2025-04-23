// Common data types
export interface Identifiable {
  id: string;
}

export interface Timestamped {
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
}

// Common status types
export type Status = 'idle' | 'loading' | 'success' | 'error';
export type LoadingState = 'initial' | 'loading' | 'loaded' | 'error';
export type ValidationStatus = 'valid' | 'invalid' | 'warning';

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  stack?: string;
}

// Common data structures
export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  parent?: TreeNode<T>;
}

export interface ListItem<T> {
  value: T;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

// Theme and style types
export interface Theme {
  colors: Record<string, string>;
  fonts: Record<string, string>;
  spacing: Record<string, string | number>;
  breakpoints: Record<string, string | number>;
} 