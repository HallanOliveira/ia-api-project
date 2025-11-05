import { FilePath } from "./FilePath";

export class DocumentIndexed {
    private success: boolean;
    private amount: number;
    private filePath: FilePath;

    constructor(success: boolean, amount: number, filePath: FilePath) {
        this.success = success;
        this.amount = amount;
        this.filePath = filePath;
    }

    getSuccess(): boolean {
        return this.success;
    }

    getAmount(): number {
        return this.amount;
    }

    getFilePath(): FilePath {
        return this.filePath;
    }
}