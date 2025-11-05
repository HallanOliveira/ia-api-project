import { DocumentExtractor } from "src/domain/interfaces/DocumentExtractor";
import { ContentExtracted } from "src/domain/valueobjects/document/ContentExtracted";
import { DocumentParsed } from "src/domain/valueobjects/document/DocumentParsed";

export class ExtractPDFContentService implements DocumentExtractor {
    async process(document: DocumentParsed): Promise<ContentExtracted> {
        return new ContentExtracted('');
    }
}