export class HttpParams {
    private value: object;

    constructor(value: object) {
        this.setValue(value)
    }

    getValue(): object {
        return this.value;
    }

    private setValue(value: object) {
        this.value = value;
    }
}