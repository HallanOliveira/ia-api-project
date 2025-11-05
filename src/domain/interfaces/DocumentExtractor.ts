import { ContentExtracted } from "../valueobjects/document/ContentExtracted";
import { DocumentParsed } from "../valueobjects/document/DocumentParsed";

export interface DocumentExtractor {
    process(document: DocumentParsed): Promise<ContentExtracted>;
}