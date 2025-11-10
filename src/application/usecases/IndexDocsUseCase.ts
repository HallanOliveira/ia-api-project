import { Output } from "../dto/indexing/Output";
import { DocumentParser } from "src/domain/interfaces/DocumentParser";
import { DocumentIndexer } from "src/domain/interfaces/DocumentIndexer";
import { FilePath } from "src/domain/valueobjects/document/FilePath";
import { Logger } from "src/domain/interfaces/Logger";
import { EmbenddingGenerator } from "src/domain/interfaces/EmbendingGenerator";

export class IndexDocsUseCase {
    private documentParserService: DocumentParser;
    private embenddingGenerator: EmbenddingGenerator;
    private indexerDocService: DocumentIndexer;
    private logger: Logger;

    constructor(
        documentParserService: DocumentParser,
        embenddingGenerator: EmbenddingGenerator,
        indexerDocService: DocumentIndexer,
        logger: Logger
    ) {
        this.documentParserService = documentParserService;
        this.embenddingGenerator = embenddingGenerator;
        this.indexerDocService = indexerDocService;
        this.logger = logger;
    }

    async execute(): Promise<Output> {
        try {
            const documentParsed = await this.documentParserService.process();
            const DocumentEmbedded = await this.embenddingGenerator.process(documentParsed);
            const documentIndexed = await this.indexerDocService.process(DocumentEmbedded);
            return new Output(documentIndexed.getFilePath(), documentIndexed.getSuccess());
        } catch(e: any) {
            console.log(e.message);
            this.logger.error(e.message);
            return new Output(new FilePath(''), false);
        }
    }
}