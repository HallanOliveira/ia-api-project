import { AIAgentInterface } from "src/domain/interfaces/AIAgentInterface";
import { AIInput } from "../../domain/dto/AIInput";
import { AIOutput } from "../../domain/dto/AIOutput";

export class AskToAIUseCase {
    private agent: AIAgentInterface;

    constructor(agent: AIAgentInterface) {
        this.agent = agent;
    }

    async execute(input: AIInput): Promise<AIOutput> {
        const response = this.agent.askToAi(input);
        return response;
    }
}