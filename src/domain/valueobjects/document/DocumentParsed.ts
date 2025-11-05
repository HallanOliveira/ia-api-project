export class DocumentParsed {
    private title: string;
    private pages: number;
    private content: string;

    constructor(title: string, pages: number, content: string) {
        this.title = title;
        this.pages = pages;
        this.content = content;
    }

    getTitle(): string {
        return this.title;
    }

    getPages(): number {
        return this.pages;
    }

    geContent(): string {
        return this.content;
    }
}