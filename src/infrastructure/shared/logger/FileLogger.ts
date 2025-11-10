import { Logger } from "src/domain/interfaces/Logger";
import path from "path";
import fs from 'fs';

const filePath = '/src/../data/storage/logs.json';

export class FileLogger implements Logger {
    info(message: string): void {
        this.save(message, 'INFO');
    }

    warning(message: string): void {
        this.save(message, 'WARNING');
    }

    error(message: string): void {
        this.save(message, 'ERROR');
    }

    private save(message: string, prefix: string): void {
        const date = new Date();
        const log = `[${date.toDateString}][${prefix}] - ${message}`
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        let existingLogs: any[] = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf-8");
            existingLogs = fileData ? JSON.parse(fileData) : [];
        }

        existingLogs.push(log);
        fs.writeFileSync(filePath, JSON.stringify(existingLogs, null, 2), "utf-8");
    }
}