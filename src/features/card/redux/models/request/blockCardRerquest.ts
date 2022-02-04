import { ApiRequest } from "_config/api";

export interface BlockCardRequest extends ApiRequest {
  identifierCard: number;
  pin: string;
}
