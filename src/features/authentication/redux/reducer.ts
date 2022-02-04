import { AuthAction, AuthActions } from "./actionTypes";
import {
  AuthState,
  ErrorAuthState,
  UnauthenticatedState,
  LoadingAuthState,
  SuccessAuthState,
} from "./state";

const initialState: AuthState = new UnauthenticatedState();

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case AuthAction.LOGIN_START:
    case AuthAction.SIGNOUT_START:
      return new LoadingAuthState();

    case AuthAction.LOGIN_SUCCESS:
      return new SuccessAuthState(action.payload.token, action.payload.user);

    case AuthAction.LOGIN_FAIL:
      return new ErrorAuthState(action.payload);

    case AuthAction.SIGNOUT_FINISH:
      return new UnauthenticatedState();

    case AuthAction.UPDATE_AUTH_DATA:
      if (!action.payload) return new SuccessAuthState(state.token, state.user);
      else return new SuccessAuthState(state.token, action.payload);

    default:
      return state;
  }
};
