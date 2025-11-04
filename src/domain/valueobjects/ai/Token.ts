export class Token {
    private value: number;

    constructor(value: number) {
        this.setValue(value);
    }

    private setValue(value: number): void {
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }
}