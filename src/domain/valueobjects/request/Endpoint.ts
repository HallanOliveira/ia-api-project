export class Endpoint {
    private value: URL;

    constructor(value: URL) {
        this.setValue(value);
    }

    getValue(): string {
        return this.value.toString();
    }

    private setValue(value: URL) {
        this.value = value;
    }
}