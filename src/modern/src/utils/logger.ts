import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';

// Create logs directory if it doesn't exist
const logDir = path.join(process.cwd(), 'logs');

// Configure the rotating file transport
const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: path.join(logDir, 'application-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

// Create the logger instance
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    fileRotateTransport,
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Export a function to get the logger instance
export const getLogger = () => logger;

// Export some convenience methods
export const logInfo = (message: string, meta?: any) => {
  logger.info(message, meta);
};

export const logError = (message: string, error?: any) => {
  logger.error(message, { error: error?.message || error });
};

export const logDebug = (message: string, meta?: any) => {
  logger.debug(message, meta);
};

export const logWarn = (message: string, meta?: any) => {
  logger.warn(message, meta);
}; 