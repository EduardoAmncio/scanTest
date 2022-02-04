import { OnboardingAction, OnboardingActions } from "./actionTypes";
import {
  FailOnboardingState,
  InitialOnboardingState,
  LoadingOnboardingState,
  OnboardingState,
  SuccessOnboardingState,
} from "./state";

const initialState: OnboardingState = new InitialOnboardingState();

// TODO: Adicionar cláusulas de validateAccount
export const activateOnboardingReducer = (
  state = initialState,
  action: OnboardingAction
) => {
  switch (action.type) {
    case OnboardingActions.UPDATE_SMS_FORM_DATA:
      if (!action.payload) return new InitialOnboardingState();
      else
        return new InitialOnboardingState({
          ...state.smsForm,
          ...action.payload,
        });

    case OnboardingActions.CREATE_ACCOUNT_FROM_SMS_START:
    case OnboardingActions.VALIDATE_ACTIVATION_TOKEN_START:
    case OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_START:
    case OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_START:
      return new LoadingOnboardingState(state.smsForm);

    case OnboardingActions.CREATE_ACCOUNT_FROM_SMS_SUCCESS:
      return new SuccessOnboardingState(state.smsForm);

    case OnboardingActions.VALIDATE_ACTIVATION_TOKEN_SUCCESS:
      return new InitialOnboardingState({
        ...state.smsForm,
        phoneNumber: action.payload.phoneNumber,
      });

    case OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_SUCCESS:
      return new InitialOnboardingState(state.smsForm);

    case OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_SUCCESS:
      return new SuccessOnboardingState(state.smsForm);

    case OnboardingActions.CREATE_ACCOUNT_FROM_SMS_FAIL:
    case OnboardingActions.VALIDATE_ACTIVATION_TOKEN_FAIL:
    case OnboardingActions.GENERATE_AUTHORIZATION_TOKEN_FAIL:
    case OnboardingActions.VALIDATE_AUTHORIZATION_TOKEN_FAIL:
      return new FailOnboardingState(action.payload, state.smsForm);

    case OnboardingActions.CLOSE_ALERT:
      return new InitialOnboardingState(state.smsForm);

    default:
      return state;
  }
};
