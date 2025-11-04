import { AIInput } from "../dto/AIInput";
import { AIOutput } from "../dto/AIOutput";

/**
 * @interface AIAgentInterface
 */
export interface AIAgentInterface {
    askToAi(input: AIInput): Promise<AIOutput>;
}
