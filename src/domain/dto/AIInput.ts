import { Message } from '../valueobjects/Message';
import { Token } from '../valueobjects/ai/Token';

export class AIInput {
    private message: Message;
    private maxTokens: Token;

    constructor(message: Message, maxTokens: Token) {
        this.message = message;
        this.maxTokens = maxTokens;
    }

    getMessage(): Message {
        return this.message;
    }

    getMaxTokens(): Token {
        return this.maxTokens;
    }

    getValues(): [Message, Token] {
        return [this.message, this.maxTokens];
    }
}