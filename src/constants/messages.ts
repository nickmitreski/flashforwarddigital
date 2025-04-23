export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
  MAX_LENGTH: (max: number) => `Must be no more than ${max} characters`,
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  INVALID_FORMAT: 'Invalid format',
  SERVER_ERROR: 'An error occurred. Please try again later.',
  NETWORK_ERROR: 'Unable to connect. Please check your internet connection.',
} as const;

export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Form submitted successfully',
  CHANGES_SAVED: 'Changes have been saved',
  MESSAGE_SENT: 'Message sent successfully',
} as const;

export const LOADING_MESSAGES = {
  SUBMITTING: 'Submitting...',
  LOADING: 'Loading...',
  PROCESSING: 'Processing...',
  SAVING: 'Saving...',
} as const;

export const CONFIRMATION_MESSAGES = {
  DELETE: 'Are you sure you want to delete this?',
  DISCARD: 'Are you sure you want to discard your changes?',
  LEAVE_PAGE: 'Are you sure you want to leave? Your changes may not be saved.',
} as const;

export const VALIDATION = {
  EMAIL_REGEX: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
  MESSAGE_MAX_LENGTH: 500,
} as const; 