import { DocumentEmbedded } from "../valueobjects/document/DocumentEmbedded";
import { DocumentParsed } from "../valueobjects/document/DocumentParsed";

export interface EmbenddingGenerator {
    process(content: DocumentParsed): Promise<DocumentEmbedded>;
}