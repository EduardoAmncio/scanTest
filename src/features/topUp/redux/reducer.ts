import { TopUpAction, TopUpActions } from "./actionTypes";
import {
  TopUpState,
  InitialTopUpState,
  LoadingTopUpState,
  SuccessTopUpState,
  FailTopUpState,
} from "./state";

const initialState: TopUpState = new InitialTopUpState();

export const topUpReducer = (
  state = initialState,
  action: TopUpAction
) => {
  switch (action.type) {
    case TopUpActions.GENERATE_TOP_UP_START:
    case TopUpActions.GET_TOP_UP_PRODUCTS_START:
      return new LoadingTopUpState(
        state.topUp,
        state.topUpPhoneNumberList
      );

    case TopUpActions.GET_TOP_UP_PRODUCTS_SUCCESS:
      return new SuccessTopUpState(
        state.topUp,
        action.payload
      );

    case TopUpActions.GENERATE_TOP_UP_FAIL:
    case TopUpActions.GET_TOP_UP_PRODUCTS_FAIL:
      return new FailTopUpState(
        action.payload,
        state.topUp,
        state.topUpPhoneNumberList
      );

    case TopUpActions.GENERATE_TOP_UP_SUCCESS:
      return new SuccessTopUpState(
        state.topUp,
        state.topUpPhoneNumberList
      );

    case TopUpActions.UPDATE_TOP_UP_DATA:
      if (!action.payload)
        return new InitialTopUpState(undefined);
      else
        return new InitialTopUpState(
          {
            ...state.topUp,
            ...action.payload,
          },
          state.topUpPhoneNumberList
        );

    default:
      return state;
  }
};
