import { SmsForm } from "./models/smsForm";
import { ValidateActivationTokenResponse } from "./models/response/validateActivationToken";

export enum OnboardingActions {
  UPDATE_SMS_FORM_DATA = "UPDATE_SMS_FORM_DATA",

  CREATE_ACCOUNT_FROM_SMS_START = "CREATE_ACCOUNT_FROM_SMS_START",
  CREATE_ACCOUNT_FROM_SMS_SUCCESS = "CREATE_ACCOUNT_FROM_SMS_SUCCESS",
  CREATE_ACCOUNT_FROM_SMS_FAIL = "CREATE_ACCOUNT_FROM_SMS_FAIL",

  VALIDATE_ACTIVATION_TOKEN_START = "VALIDATE_ACTIVATION_TOKEN_START",
  VALIDATE_ACTIVATION_TOKEN_SUCCESS = "VALIDATE_ACTIVATION_TOKEN_SUCCESS",
  VALIDATE_ACTIVATION_TOKEN_FAIL = "VALIDATE_ACTIVATION_TOKEN_FAIL",

  GENERATE_AUTHORIZATION_TOKEN_START = "GENERATE_AUTHORIZATION_TOKEN_START",
  GENERATE_AUTHORIZATION_TOKEN_SUCCESS = "GENERATE_AUTHORIZATION_TOKEN_SUCCESS",
  GENERATE_AUTHORIZATION_TOKEN_FAIL = "GENERATE_AUTHORIZATION_TOKEN_FAIL",

  VALIDATE_AUTHORIZATION_TOKEN_START = "VALIDATE_AUTHORIZATION_TOKEN_START",
  VALIDATE_AUTHORIZATION_TOKEN_SUCCESS = "VALIDATE_AUTHORIZATION_TOKEN_SUCCESS",
  VALIDATE_AUTHORIZATION_TOKEN_FAIL = "VALIDATE_AUTHORIZATION_TOKEN_FAIL",

  CLOSE_ALERT = "CLOSE_ALERT",
}

export interface UpdateSmsFormDataAction {
  type: OnboardingActions.UPDATE_SMS_FORM_DATA;
  payload?: SmsForm;
}

export interface CreateAccountFromSmsStartAction {
  type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_START;
}

export interface CreateAccountFromSmsSuccessAction {
  type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_SUCCESS;
}

export interface CreateAccountFromSmsFailAction {
  type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_FAIL;
  payload: string;
}

export interface ValidateTokenStartAction {
  type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_START;
}

export interface ValidateTokenSuccessAction {
  type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_SUCCESS;
  payload: ValidateActivationTokenResponse;
}

export interface ValidateTokenFailAction {
  type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_FAIL;
  payload: string;
}

export interface GenerateAuthorizationTokenStartAction {
  type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_START;
}

export interface GenerateAuthorizationTokenSuccessAction {
  type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_SUCCESS;
}

export interface GenerateAuthorizationTokenFailAction {
  type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_FAIL;
  payload: string;
}

export interface ValidateAuthorizationTokenStartAction {
  type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_START;
}

export interface ValidateAuthorizationTokenSuccessAction {
  type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_SUCCESS;
}

export interface ValidateAuthorizationTokenFailAction {
  type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_FAIL;
  payload: string;
}

export interface CloseAlertAction {
  type: OnboardingActions.CLOSE_ALERT;
}

export type OnboardingAction =
  | UpdateSmsFormDataAction
  | CreateAccountFromSmsStartAction
  | CreateAccountFromSmsSuccessAction
  | CreateAccountFromSmsFailAction
  | GenerateAuthorizationTokenStartAction
  | GenerateAuthorizationTokenSuccessAction
  | GenerateAuthorizationTokenFailAction
  | ValidateAuthorizationTokenStartAction
  | ValidateAuthorizationTokenSuccessAction
  | ValidateAuthorizationTokenFailAction
  | ValidateTokenStartAction
  | ValidateTokenSuccessAction
  | ValidateTokenFailAction
  | CloseAlertAction;
