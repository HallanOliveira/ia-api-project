import { RequestInterface } from "src/domain/interfaces/RequestInterface";
import { Endpoint } from "src/domain/valueobjects/request/Endpoint";
import { HttpBody } from "src/domain/valueobjects/request/HttpBody";
import { HttpHeader } from "src/domain/valueobjects/request/HttpHeader";
import { HttpParams } from "src/domain/valueobjects/request/HttpParams";

export abstract class BaseRequest implements RequestInterface {
    protected endpoint: Endpoint;
    protected body: HttpBody;
    protected header: HttpHeader;
    protected params: HttpParams;

    protected constructor(endpoint: Endpoint, body: HttpBody, header: HttpHeader, params: HttpParams) {
        this.endpoint = endpoint;
        this.body = body;
        this.header = header;
        this.params = params;
    }

    getEndpoint(): Endpoint {
        return this.endpoint;
    }

    getBody(): HttpBody {
        return this.body;
    }

    getHeader(): HttpHeader {
        return this.header;
    }

    getParams(): HttpParams {
        return this.params;
    }
}