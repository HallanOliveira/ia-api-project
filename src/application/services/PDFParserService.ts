import { DocumentParser } from "src/domain/interfaces/DocumentParser";
import { DocumentParsed } from "src/domain/valueobjects/document/DocumentParsed";
import { FilePath } from "src/domain/valueobjects/document/FilePath";
import * as fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

export class PDFParserService implements DocumentParser {
    filePath: FilePath;
    separator: string;
    startsPage: number;

    constructor(
        filePath: FilePath,
        separator: string = '\n',
        startsPage: number = 1
    ) {
        this.filePath = filePath;
        this.separator = separator;
        this.startsPage = startsPage;
    }

    async process(): Promise<DocumentParsed> {
        const data = new Uint8Array(fs.readFileSync(this.filePath.getValue()));
        const pdf = await pdfjsLib.getDocument(data).promise;

        // getMetadata retorna informações do documento
        const metadata = await pdf.getMetadata().catch(() => null);
        const title = (metadata as any)?.info?.Title;

        let fullText = '';
        for (let pageNum = this.startsPage; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item: any) => item.str).join(' ');
            fullText += `\n${pageText}`;
        }

        await pdf.destroy();
        return new DocumentParsed(title, pdf.numPages, fullText, this.separator);
    }
}