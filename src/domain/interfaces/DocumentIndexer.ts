import { DocumentEmbedded } from "../valueobjects/document/DocumentEmbedded";
import { DocumentIndexed } from "../valueobjects/document/DocumentIndexed";

export interface DocumentIndexer {
    process(documentEmbedded: DocumentEmbedded): Promise<DocumentIndexed>;
}