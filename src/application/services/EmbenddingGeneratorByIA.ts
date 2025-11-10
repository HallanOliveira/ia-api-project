import { AIAgentInterface } from "src/domain/interfaces/AIAgentInterface";
import { EmbenddingGenerator } from "src/domain/interfaces/EmbendingGenerator";
import { DocumentEmbedded } from "src/domain/valueobjects/document/DocumentEmbedded";
import { DocumentParsed } from "src/domain/valueobjects/document/DocumentParsed";

export class EmbenddingGeneratorByIA implements EmbenddingGenerator {
    private aiAgent: AIAgentInterface;

    constructor(aiAgent: AIAgentInterface) {
        this.aiAgent = aiAgent;
    }
    async process(document: DocumentParsed): Promise<DocumentEmbedded> {
        const documentSparated = document.getContentSepareted();
        console.log(documentSparated);
        return new DocumentEmbedded([{}]);
    }
}