import { DocumentParser } from "src/domain/interfaces/DocumentParser";
import { DocumentParsed } from "src/domain/valueobjects/document/DocumentParsed";
import { FilePath } from "src/domain/valueobjects/document/FilePath";
import * as path from 'path';
import * as pdfjsLib from 'pdfjs-dist';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
import * as fs from 'fs';

GlobalWorkerOptions.workerSrc = path.join(
  path.dirname(require.resolve('pdfjs-dist')),
  'legacy/build/pdf.worker.js'
);

export class PDFParserService implements DocumentParser {
    filePath: FilePath;

    constructor(filePath: FilePath) {
        this.filePath = filePath;
    }

    async process(): Promise<DocumentParsed> {
        const pdfData = new Uint8Array(fs.readFileSync(this.filePath.getValue()));
        const pdf = await getDocument({ pdfData }).promise;
        console.log(pdf);
        return new DocumentParsed('',1,'');
    }
}