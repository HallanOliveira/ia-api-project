import { AIInput } from "src/domain/dto/AIInput";
import { AIOutput } from "src/domain/dto/AIOutput";
import { AIAgentInterface } from "src/domain/interfaces/AIAgentInterface";
import { GoogleGenAI } from "@google/genai";
import { Response } from "src/domain/valueobjects/ai/Response";
import { Token } from "src/domain/valueobjects/ai/Token";

export class GeminiAgent implements AIAgentInterface {
    private ai: any;

    private constructor() {
        this.ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });
    }

    async askToAi(input: AIInput): Promise<AIOutput> {
        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: input.getMessage().getValue(),
        });

        return new AIOutput(new Response(response.text), new Token(response.usageMetadata.promptTokenCount));
    }
}