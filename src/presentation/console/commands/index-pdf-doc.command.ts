import { IndexerDocInFileService } from "src/application/services/IndexerDocInFileService";
import { ExtractPDFContentService } from "src/application/services/ExtractPDFContentService";
import { PDFParserService } from "src/application/services/PDFParserService";
import { IndexDocsUseCase } from "src/application/usecases/IndexDocsUseCase";
import { FilePath } from "src/domain/valueobjects/document/FilePath";
import { GeminiAgent } from "src/infrastructure/external/AIAgents/GeminiAgent";
import { Command } from 'commander';

const filePath = '/src/../data/docs/cdc-portugues-2013.pdf';
const agentModel = 'gemini-embedding-001';
const documentParserService = new PDFParserService(new FilePath(filePath));
const extractContentService = new ExtractPDFContentService();
const indexerDocService = new IndexerDocInFileService();

const useCase = new IndexDocsUseCase(
    documentParserService,
    extractContentService,
    indexerDocService
);

//npm run cli index-docs
export async function registerIndexDocsCommand(program: Command): Promise<void> {
    program
        .command('index-docs')
        .description('Indexa documentos PDF no banco')
        .option('-f, --file <path>', 'Caminho do arquivo PDF a ser indexado')
        .action(async (options) => {
            console.log('Starting indexing docs to vectorial database.');
            const response = await useCase.execute();
            if (response.isSuccess()) {
                console.log(`Indexing docs done with success! Check the document generated: ${response.getFilePath()}`);
                return;
            }
            console.error(`indexing docs failed, check logs to more details.`);
        });
}
