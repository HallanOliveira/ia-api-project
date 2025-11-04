export class Response {
    private value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    private setValue(value: string): void {
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }
}