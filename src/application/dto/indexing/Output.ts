import { FilePath } from "src/domain/valueobjects/document/FilePath";

export class Output {
    private filePath: FilePath;
    private success: boolean;

    constructor(filePath: FilePath, success: boolean) {
        this.filePath = filePath;
        this.success = success;
    }

    getFilePath(): FilePath {
        return this.filePath;
    }

    isSuccess(): boolean {
        return this.success;
    }
}