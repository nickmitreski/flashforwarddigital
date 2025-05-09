import { logInfo, logError, logWarn } from './logger';
import fs from 'fs';
import path from 'path';

interface RefactorLog {
  timestamp: string;
  filePath: string;
  originalSize: number;
  newSize: number;
  changes: string[];
  backupPath: string;
}

class RefactorLogger {
  private logFile: string;
  private logs: RefactorLog[] = [];

  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'refactor-history.json');
    this.loadExistingLogs();
  }

  private loadExistingLogs() {
    try {
      if (fs.existsSync(this.logFile)) {
        const data = fs.readFileSync(this.logFile, 'utf-8');
        this.logs = JSON.parse(data);
      }
    } catch (error) {
      logError('Failed to load refactor logs', error);
    }
  }

  private saveLogs() {
    try {
      fs.writeFileSync(this.logFile, JSON.stringify(this.logs, null, 2));
    } catch (error) {
      logError('Failed to save refactor logs', error);
    }
  }

  async backupFile(filePath: string): Promise<string> {
    try {
      const backupDir = path.join(process.cwd(), 'logs', 'backups');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const fileName = path.basename(filePath);
      const backupPath = path.join(backupDir, `${fileName}.${timestamp}.backup`);

      await fs.promises.copyFile(filePath, backupPath);
      logInfo(`Created backup of ${filePath} at ${backupPath}`);
      return backupPath;
    } catch (error) {
      logError(`Failed to backup file ${filePath}`, error);
      throw error;
    }
  }

  logRefactor(filePath: string, originalSize: number, newSize: number, changes: string[]) {
    const log: RefactorLog = {
      timestamp: new Date().toISOString(),
      filePath,
      originalSize,
      newSize,
      changes,
      backupPath: ''
    };

    this.logs.push(log);
    this.saveLogs();
    logInfo(`Refactored ${filePath}`, {
      originalSize,
      newSize,
      reduction: `${((originalSize - newSize) / originalSize * 100).toFixed(2)}%`,
      changes
    });
  }

  getRefactorHistory(): RefactorLog[] {
    return this.logs;
  }
}

export const refactorLogger = new RefactorLogger(); 