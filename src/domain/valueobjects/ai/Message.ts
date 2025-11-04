import { DomainException } from "../../exceptions/DomainException";

export class Message {
    private value: string;

    constructor(value: string) {
        this.setValue(value);
    }

    getValue(): string {
        return this.value;
    }

    private setValue(value: string) {
        if (value.length > 2000) {
            throw new DomainException('Message can not be greather than 2000 characters.');
        }
        this.value = value;
    }
}