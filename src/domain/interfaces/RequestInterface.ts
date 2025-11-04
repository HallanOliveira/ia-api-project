import { Endpoint } from "../valueobjects/request/Endpoint";
import { HttpBody } from "../valueobjects/request/HttpBody";
import { HttpHeader } from "../valueobjects/request/HttpHeader";
import { HttpParams } from "../valueobjects/request/HttpParams";

/**
 * Representa uma requisição HTTP genérica, contendo os principais
 * componentes de uma chamada: endpoint, corpo e cabeçalhos.
 *
 * Essa interface define o contrato que qualquer implementação de requisição
 * deve seguir dentro da aplicação.
 *
 * @interface RequestInterface
 */
export interface RequestInterface {
    /**
     * Retorna o endpoint associado a esta requisição.
     * @returns {Endpoint} O endpoint configurado.
     */
    getEndpoint(): Endpoint;

    /**
     * Retorna o corpo (body) da requisição.
     * @returns {HttpBody} O corpo configurado da requisição.
     */
    getBody(): HttpBody;

    /**
     * Retorna os cabeçalhos HTTP configurados.
     * @returns {HttpHeader} Os cabeçalhos HTTP.
     */
    getHeader(): HttpHeader;

    /**
     * Retorna os parametros HTTP configurados.
     * @returns {HttpParams} Os parametros HTTP.
     */
    getParams(): HttpParams
}
