import { DocumentIndexer } from "src/domain/interfaces/DocumentIndexer";
import { ContentExtracted } from "src/domain/valueobjects/document/ContentExtracted";
import { DocumentIndexed } from "src/domain/valueobjects/document/DocumentIndexed";
import { FilePath } from "src/domain/valueobjects/document/FilePath";

export class IndexerDocInFileService implements DocumentIndexer {
    async process(content: ContentExtracted): Promise<DocumentIndexed> {
        return new DocumentIndexed(true, 1, new FilePath(''));
    }
}