import { PaymentAction, PaymentActions } from "./actionTypes";

import {
  PaymentState,
  ErrorPaymentState,
  StartPaymentState,
  LoadingPaymentState,
  SuccessPaymentState,
} from "./state";

const initialState: PaymentState = new StartPaymentState();

export const paymentReducer = (
  state = initialState,
  action: PaymentActions
) => {
  switch (action.type) {
    case PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_START:
    case PaymentAction.GET_DETAILS_BY_BARCODE_START:
    case PaymentAction.GET_MINIMUM_PAYMENT_DATE_START:
    case PaymentAction.CREATE_PAYMENT_START:
      return new LoadingPaymentState(state.barcode, state.paymentData);

    case PaymentAction.GET_DETAILS_BY_BARCODE_SUCCESS:
      return new SuccessPaymentState(action.payload.barcode, {
        ...action.payload.barcodePaymentData,
        canBePaid: state.paymentData?.canBePaid,
        type: state.paymentData?.type,
      });

    case PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_SUCCESS:
      return new SuccessPaymentState(action.payload.barcode, {
        ...state.paymentData,
        type: action.payload.type,
        canBePaid: action.payload.canBePaid,
      });

    case PaymentAction.GET_MINIMUM_PAYMENT_DATE_SUCCESS:
      return new SuccessPaymentState(
        state.barcode!,
        state.paymentData!,
        action.payload
      );

    case PaymentAction.CREATE_PAYMENT_SUCESS:
      return new SuccessPaymentState(state.barcode!, state.paymentData!);

    case PaymentAction.GET_DETAILS_BY_BARCODE_FAIL:
    case PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_FAIL:
    case PaymentAction.GET_MINIMUM_PAYMENT_DATE_FAIL:
    case PaymentAction.CREATE_PAYMENT_FAIL:
      return new ErrorPaymentState(
        action.payload,
        state.barcode,
        state.paymentData
      );

    case PaymentAction.UPDATE_PAYMENT:
      if (!action.payload) return new StartPaymentState(state.barcode!, {});

      return new StartPaymentState(
        state.barcode!,
        {
          ...state.paymentData,
          ...action.payload,
        },
        action.payload.minimumPaymentDate
      );

    default:
      return state;
  }
};
