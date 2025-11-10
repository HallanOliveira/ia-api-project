export class DocumentEmbedded {
    private value: object[];

    constructor(value: object[]) {
        this.value = value;
    }

    getValue():  object[] {
        return this.value;
    }

}