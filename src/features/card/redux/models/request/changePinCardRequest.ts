import { ApiRequest } from "_config/api";

export interface ChangePinCardRequest extends ApiRequest {
  identifierCard?: number;
  currentPin?: string;
  pin?: string;
  confirmationPin?: string;
}
