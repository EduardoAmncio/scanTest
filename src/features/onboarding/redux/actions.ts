import { Dispatch } from "redux";
import { GetState } from "redux/state";
import { ApiResponse } from "_config/api";
import { HttpClient } from "_config/http";
import { getBaseRequestData } from "_utils/http";
import {
  CloseAlertAction,
  CreateAccountFromSmsFailAction,
  CreateAccountFromSmsStartAction,
  CreateAccountFromSmsSuccessAction,
  GenerateAuthorizationTokenFailAction,
  GenerateAuthorizationTokenStartAction,
  GenerateAuthorizationTokenSuccessAction,
  OnboardingActions,
  UpdateSmsFormDataAction,
  ValidateAuthorizationTokenFailAction,
  ValidateAuthorizationTokenStartAction,
  ValidateAuthorizationTokenSuccessAction,
  ValidateTokenFailAction,
  ValidateTokenStartAction,
  ValidateTokenSuccessAction,
} from "./actionTypes";
import { CreateAccountFromSmsRequest } from "./models/request/createAccountFromSms";
import { GenerateAuthorizationTokenRequest } from "./models/request/generateAuthorizationToken";
import { ValidateAuthorizationTokenRequest } from "./models/request/validateAuthorizationToken";
import { ValidateTokenRequest } from "./models/request/validateActivationToken";
import { ValidateActivationTokenResponse } from "./models/response/validateActivationToken";
import { SmsForm } from "./models/smsForm";

export const updateSmsForm = (data: SmsForm) => (dispatch: Dispatch) => {
  dispatch<UpdateSmsFormDataAction>({
    type: OnboardingActions.UPDATE_SMS_FORM_DATA,
    payload: data,
  });
};

export const validateActivationToken =
  (activationToken: string) => async (dispatch: Dispatch) => {
    dispatch<ValidateTokenStartAction>({
      type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_START,
    });

    try {
      const { url, defaultHeaders, token } = await getBaseRequestData(
        "/internalTransfer/findPendingInternalTransfer"
      );

      const data: ValidateTokenRequest = {
        verificationCode: activationToken,
      };

      const response = await HttpClient.post<ValidateActivationTokenResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.success) throw new Error(response.data.message);

      dispatch<ValidateTokenSuccessAction>({
        type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_SUCCESS,
        payload: response.data.data,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<ValidateTokenFailAction>({
        type: OnboardingActions.VALIDATE_ACTIVATION_TOKEN_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const createAccountFromSms =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<CreateAccountFromSmsStartAction>({
      type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_START,
    });
    try {
      const state = getState();
      const { url, defaultHeaders, token } = await getBaseRequestData(
        "/limitedAccount",
        state
      );

      const data: CreateAccountFromSmsRequest = {
        ...state.onboarding.smsForm!,
      };

      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<CreateAccountFromSmsSuccessAction>({
        type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_SUCCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<CreateAccountFromSmsFailAction>({
        type: OnboardingActions.CREATE_ACCOUNT_FROM_SMS_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const generateAuthorizationToken =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GenerateAuthorizationTokenStartAction>({
      type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token } = await getBaseRequestData(
        "/authorizationToken/GenerateOnboardingAuthorizationToken",
        state
      );
      const data: GenerateAuthorizationTokenRequest = {
        phoneNumber: state.onboarding.smsForm!.phoneNumber!,
      };

      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<GenerateAuthorizationTokenSuccessAction>({
        type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_SUCCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GenerateAuthorizationTokenFailAction>({
        type: OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const validateAuthorizationToken =
  (authorizationToken: string) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<ValidateAuthorizationTokenStartAction>({
      type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token } = await getBaseRequestData(
        "/authorizationToken/ValidateOnboardingAuthorizationToken",
        state
      );
      const data: ValidateAuthorizationTokenRequest = {
        code: authorizationToken,
        phoneNumber: state.onboarding.smsForm!.phoneNumber!,
      };

      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<ValidateAuthorizationTokenSuccessAction>({
        type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_SUCCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<ValidateAuthorizationTokenFailAction>({
        type: OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const closeAlert = () => (dispatch: Dispatch) => {
  dispatch<CloseAlertAction>({
    type: OnboardingActions.CLOSE_ALERT,
  });
};
