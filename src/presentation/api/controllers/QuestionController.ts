import { Request, Response } from "express";
import { QuestionRequestValidator } from '../validators/QuestionRequestValidator';
import { AskToAIUseCase } from 'src/application/usecases/AskToAIUseCase';
import { Message } from "src/domain/valueobjects/Message";
import { AIInput } from "src/domain/dto/AIInput";
import { Token } from "src/domain/valueobjects/ai/Token";

export class QuestionController {
    private validator: QuestionRequestValidator;
    private useCase: AskToAIUseCase;

    constructor() {
        this.validator = new QuestionRequestValidator;
        this.useCase = new AskToAIUseCase;
    }

    async handle(req: Request, res: Response): Promise<any> {
        try {
            await this.validator.validate(req);
            const inputDto = this.createInputDto(req);
            const outputDto = await this.useCase.execute(inputDto);
            return res.status(200).json({
                success: true,
                response: `Mensagem: ${outputDto.getResponse().getValue()}`
            });
        } catch (e) {
            return res.status(e.status).json({
                success: false,
                response: `error: ${e.message}`
            });
        }
    }

    private createInputDto(req: Request): AIInput {
        let message = new Message(req.body.message);
        let maxTokens = new Token(1000) 
        return new AIInput(message, maxTokens);
    }
}