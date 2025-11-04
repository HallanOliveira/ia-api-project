import { AIInput } from "../../domain/dto/AIInput";
import { AIOutput } from "../../domain/dto/AIOutput";
import { Response } from "../../domain/valueobjects/ai/Response";
import { Token } from "../../domain/valueobjects/ai/Token";

export class AskToAIUseCase {
    constructor() {

    }

    async execute(input: AIInput): Promise<AIOutput> {
        const response = new Response('teste');
        const tokens = new Token(1234);
        return new AIOutput(response, tokens);
    }
}