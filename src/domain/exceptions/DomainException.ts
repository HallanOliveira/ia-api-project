export class DomainException extends Error {
    public status: number;

    constructor(message: string) {
        super(message);
        this.name = "DomainException";
        this.status = 400;
    }
}