import { ContentExtracted } from "../valueobjects/document/ContentExtracted";
import { DocumentIndexed } from "../valueobjects/document/DocumentIndexed";

export interface DocumentIndexer {
    process(content: ContentExtracted): Promise<DocumentIndexed>;
}