import { IndexerDocInFileService } from "src/application/services/IndexerDocInFileService";
import { EmbenddingGeneratorByIA } from "src/application/services/EmbenddingGeneratorByIA";
import { PDFParserService } from "src/application/services/PDFParserService";
import { IndexDocsUseCase } from "src/application/usecases/IndexDocsUseCase";
import { FilePath } from "src/domain/valueobjects/document/FilePath";
import { GeminiAgent } from "src/infrastructure/external/AIAgents/GeminiAgent";
import { Command } from 'commander';
import { FileLogger } from "src/infrastructure/shared/logger/FileLogger";

//npm run cli index-docs
export async function registerIndexDocsCommand(program: Command): Promise<void> {
    program
        .command('index-docs [page] [separator]')
        .description('Index documents PDF to database')
        .option('-p, --page <numberPage>', 'Number of page to start content')
        .option('-s, --separator <separator>', 'String text separator')
        .action(async (pageNumber, separator) => {
            const startPage = parseInt(String(pageNumber || '1'), 10);
            const filePath = __dirname + '/../../../../data/docs/cdc-portugues-2013.pdf';
            const agentModelToEmbendding = 'gemini-embedding-001';
            const aiAgent = new GeminiAgent(agentModelToEmbendding)
            const logger = new FileLogger();
            const documentParserService = new PDFParserService(new FilePath(filePath), separator, startPage);
            const embeddingGeneratorService = new EmbenddingGeneratorByIA(aiAgent);
            const indexerDocService = new IndexerDocInFileService();

            const useCase = new IndexDocsUseCase(
                documentParserService,
                embeddingGeneratorService,
                indexerDocService,
                logger
            );

            console.log('Starting indexing docs to vectorial database.');
            const response = await useCase.execute();
            if (response.isSuccess()) {
                console.log(`Indexing docs done with success! Check the document generated: ${response.getFilePath()}`);
                return;
            }
            console.error(`indexing docs failed, check logs to more details.`);
        });
}
