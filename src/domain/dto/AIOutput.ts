import { Response } from "../valueobjects/ai/Response";
import { Token } from "../valueobjects/ai/Token";

export class AIOutput {
    private response: Response;
    private tokens: Token; 

    constructor(response: Response, tokens: Token) {
        this.response = response;
        this.tokens = tokens;
    }

    getResponse(): Response {
        return this.response;
    }

    getTokens(): Token {
        return this.tokens;
    }

    getValues(): [Response, Token] {
        return [this.response, this.tokens];
    }
}