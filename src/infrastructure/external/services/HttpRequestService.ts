import { RequestInterface } from "src/domain/interfaces/RequestInterface";
import axios from "axios";

export class HttpRequestService {
    private request: RequestInterface;
    private httpProvider: any;

    constructor(request: RequestInterface) {
        this.request = request;
        this.httpProvider = axios;
    }

    get() {
    try {
        const response = await this.httpProvider.get(request.url);
        console.log(response.data);
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
    }

    post() {

    }

    put() {

    }

    delete() {

    }
}