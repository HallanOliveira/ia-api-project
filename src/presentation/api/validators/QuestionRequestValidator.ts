import { Request } from "express";
import { z } from "zod";
import { ValidationException } from "../exceptions/ValidationException";

const questionSchema = z.object({
  message: z.string("O campo 'message' é obrigatório.").min(1, "O campo 'message' é obrigatório."),
});

export class QuestionRequestValidator {
    async validate (req: Request): Promise<void> {
        const parseResult = questionSchema.safeParse(req.body);
        if (!parseResult.success) {
            const errors = parseResult.error.issues.map(e => e.message);
            throw new ValidationException(errors.join(';'));
        }
        return;
    }
} 
