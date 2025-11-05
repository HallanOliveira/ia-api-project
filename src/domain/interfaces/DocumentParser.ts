import { DocumentParsed } from "../valueobjects/document/DocumentParsed";
import { FilePath } from "../valueobjects/document/FilePath";

export interface DocumentParser {
    filePath: FilePath;
    process():  Promise<DocumentParsed>;
}