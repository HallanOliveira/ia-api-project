export class DocumentParsed {
    private title: string;
    private pages: number;
    private content: string;
    private separator: string;

    constructor(title: string, pages: number, content: string, separator: string = '\n') {
        this.title = title;
        this.pages = pages;
        this.content = content;
        this.separator = separator;
    }

    getTitle(): string {
        return this.title;
    }

    getPages(): number {
        return this.pages;
    }

    getRawContent(): string {
        return this.content;
    }

    getContentSepareted(): string[] {
        const content = this.content.split(this.separator);
        let contentFiltered: string[] = [];
        content.forEach((value, key) => {
            if (value !== '\n' && value.length > 1) {
                contentFiltered.push(value);
            }
        })    
        return contentFiltered;
    }
}