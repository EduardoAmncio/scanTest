import { ApiRequest } from "_config/api";

export interface unBlockCardRequest extends ApiRequest {
  identifierCard: number;
  pin: string;
}
