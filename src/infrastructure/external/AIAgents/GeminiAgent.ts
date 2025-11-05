import { AIInput } from "src/domain/dto/AIInput";
import { AIOutput } from "src/domain/dto/AIOutput";
import { AIAgentInterface } from "src/domain/interfaces/AIAgentInterface";
import { GoogleGenAI } from "@google/genai";
import { Response } from "src/domain/valueobjects/ai/Response";
import { Token } from "src/domain/valueobjects/ai/Token";

export class GeminiAgent implements AIAgentInterface {
    private ai: any;
    private model: string;

    constructor(model: string = 'gemini-2.5-flash') {
        this.model = model;
        this.ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });
    }

    async askToAi(input: AIInput): Promise<AIOutput> {
        const responseApi = await this.ai.models.generateContent({
            model: this.model,
            contents: input.getMessage().getValue(),
        });

        const response = new Response(responseApi.text);
        const tokens = new Token(responseApi.usageMetadata.promptTokenCount)
        
        return new AIOutput(response, tokens);
    }
}