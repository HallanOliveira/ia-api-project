import { Output } from "../dto/indexing/Output";
import { DocumentParser } from "src/domain/interfaces/DocumentParser";
import { DocumentExtractor } from "src/domain/interfaces/DocumentExtractor";
import { DocumentIndexer } from "src/domain/interfaces/DocumentIndexer";
import { FilePath } from "src/domain/valueobjects/document/FilePath";

export class IndexDocsUseCase {
    private documentParserService: DocumentParser;
    private extractContentService: DocumentExtractor;
    private indexerDocService: DocumentIndexer;

    constructor(
        documentParserService: DocumentParser,
        extractContentService: DocumentExtractor,
        indexerDocService: DocumentIndexer
    ) {
        this.documentParserService = documentParserService;
        this.extractContentService = extractContentService;
        this.indexerDocService = indexerDocService;
    }

    async execute(): Promise<Output> {
        try {
            const documentParsed = await this.documentParserService.process();
            const contentExtracted = await this.extractContentService.process(documentParsed);
            const documentIndexed = await this.indexerDocService.process(contentExtracted);
            return new Output(documentIndexed.getFilePath(), documentIndexed.getSuccess());
        } catch {
            return new Output(new FilePath(''), false);
        }
    }
}