import { DocumentIndexer } from "src/domain/interfaces/DocumentIndexer";
import { DocumentEmbedded } from "src/domain/valueobjects/document/DocumentEmbedded";
import { DocumentIndexed } from "src/domain/valueobjects/document/DocumentIndexed";
import { FilePath } from "src/domain/valueobjects/document/FilePath";

export class IndexerDocInFileService implements DocumentIndexer {
    async process(documentEmbedded: DocumentEmbedded): Promise<DocumentIndexed> {
        return new DocumentIndexed(true, 1, new FilePath(''));
    }
}