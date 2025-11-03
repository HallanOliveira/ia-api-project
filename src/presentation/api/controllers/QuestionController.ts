import { Request, Response } from "express";
import { QuestionRequestValidator } from '../validators/QuestionRequestValidator';
import { ValidationException } from "../exceptions/ValidationException";

export class QuestionController {
    private validator: QuestionRequestValidator;

    constructor() {
        this.validator = new QuestionRequestValidator;
    }

    async handle(req: Request, res: Response): Promise<any> {
        try {
            await this.validator.validate(req);
            return res.status(200).json({
                success: true,
                response: `Mensagem: ${req.body.message}`
            });
        } catch (e) {
            return res.status(e.status).json({
                success: false,
                response: `error: ${e.message}`
            });
        }
    }
}