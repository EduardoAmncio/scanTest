import { BoletoType } from "./models/boletoType";
import { CreatePaymentData } from "./models/createPaymentData";
import { GetDetailsOnCipResponse } from "./models/response/getDetailsOnCIP";

export enum PaymentAction {
  GET_DETAILS_BY_BARCODE_START = "GET_DETAILS_BY_BARCODE_START",
  GET_DETAILS_BY_BARCODE_SUCCESS = "GET_DETAILS_BY_BARCODE_SUCCESS",
  GET_DETAILS_BY_BARCODE_FAIL = "GET_DETAILS_BY_BARCODE_FAIL",

  VERIFY_IF_PAYMENT_CAN_BE_MADE_START = "VERIFY_IF_PAYMENT_CAN_BE_MADE_START",
  VERIFY_IF_PAYMENT_CAN_BE_MADE_SUCCESS = "VERIFY_IF_PAYMENT_CAN_BE_MADE_SUCCESS",
  VERIFY_IF_PAYMENT_CAN_BE_MADE_FAIL = "VERIFY_IF_PAYMENT_CAN_BE_MADE_FAIL",

  GET_MINIMUM_PAYMENT_DATE_START = "GET_MINIMUM_PAYMENT_DATE_START",
  GET_MINIMUM_PAYMENT_DATE_SUCCESS = "GET_MINIMUM_PAYMENT_DATE_SUCCESS",
  GET_MINIMUM_PAYMENT_DATE_FAIL = "GET_MINIMUM_PAYMENT_DATE_FAIL",

  CREATE_PAYMENT_START = "CREATE_PAYMENT_START",
  CREATE_PAYMENT_SUCESS = "CREATE_PAYMENT_SUCESS",
  CREATE_PAYMENT_FAIL = "CREATE_PAYMENT_FAIL",

  UPDATE_PAYMENT = "UPDATE_PAYMENT",
  CLOSE_ALERT = "CLOSE_ALERT",
}

export interface GetDetailsByBarcodeStartAction {
  type: PaymentAction.GET_DETAILS_BY_BARCODE_START;
}

export interface GetDetailsByBarcodeSuccessAction {
  type: PaymentAction.GET_DETAILS_BY_BARCODE_SUCCESS;
  payload: {
    barcode: string;
    barcodePaymentData: GetDetailsOnCipResponse;
  };
}

export interface GetDetailsByBarcodeFailAction {
  type: PaymentAction.GET_DETAILS_BY_BARCODE_FAIL;
  payload: string;
}

export interface VerifyIfPaymentCanBeMadeStartAction {
  type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_START;
}

export interface VerifyIfPaymentCanBeMadeSuccessAction {
  type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_SUCCESS;
  payload: {
    canBePaid: Boolean;
    type: BoletoType;
    barcode: string;
  };
}

export interface VerifyIfPaymentCanBeMadeFailAction {
  type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_FAIL;
  payload: string;
}

export interface GetMinimumPaymentDateStartAction {
  type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_START;
}

export interface GetMinimumPaymentDateSuccessAction {
  type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_SUCCESS;
  payload: Date;
}

export interface GetMinimumPaymentDateFailAction {
  type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_FAIL;
  payload: string;
}

export interface CreatePaymentStartAction {
  type: PaymentAction.CREATE_PAYMENT_START;
}

export interface CreatePaymentSucessAction {
  type: PaymentAction.CREATE_PAYMENT_SUCESS;
}

export interface CreatePaymentFailAction {
  type: PaymentAction.CREATE_PAYMENT_FAIL;
  payload: string;
}

export interface UpdatePaymentAction {
  type: PaymentAction.UPDATE_PAYMENT;
  payload: CreatePaymentData | undefined;
}

export interface CloseAlertAction {
  type: PaymentAction.CLOSE_ALERT;
}

export type PaymentActions =
  | GetDetailsByBarcodeStartAction
  | GetDetailsByBarcodeSuccessAction
  | GetDetailsByBarcodeFailAction
  | VerifyIfPaymentCanBeMadeStartAction
  | VerifyIfPaymentCanBeMadeSuccessAction
  | VerifyIfPaymentCanBeMadeFailAction
  | GetMinimumPaymentDateStartAction
  | GetMinimumPaymentDateSuccessAction
  | GetMinimumPaymentDateFailAction
  | CreatePaymentStartAction
  | CreatePaymentSucessAction
  | CreatePaymentFailAction
  | UpdatePaymentAction
  | CloseAlertAction;
