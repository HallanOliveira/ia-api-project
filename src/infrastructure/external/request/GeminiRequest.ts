import { Endpoint } from "src/domain/valueobjects/request/Endpoint";
import { HttpBody } from "src/domain/valueobjects/request/HttpBody";
import { HttpHeader } from "src/domain/valueobjects/request/HttpHeader";
import { HttpParams } from "src/domain/valueobjects/request/HttpParams";
import { BaseRequest } from "./BaseRequest";

export class GeminiRequest extends BaseRequest {
    static create(endpoint: Endpoint, body: HttpBody, header: HttpHeader, params: HttpParams): GeminiRequest {
        return new GeminiRequest(endpoint, body, header, params);
    }
}