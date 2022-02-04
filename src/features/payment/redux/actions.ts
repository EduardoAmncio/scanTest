import { Dispatch } from "redux";
import {
  PaymentAction,
  GetDetailsByBarcodeStartAction,
  GetDetailsByBarcodeSuccessAction,
  GetDetailsByBarcodeFailAction,
  VerifyIfPaymentCanBeMadeStartAction,
  VerifyIfPaymentCanBeMadeSuccessAction,
  VerifyIfPaymentCanBeMadeFailAction,
  CreatePaymentStartAction,
  CreatePaymentSucessAction,
  CreatePaymentFailAction,
  UpdatePaymentAction,
  GetMinimumPaymentDateStartAction,
  GetMinimumPaymentDateSuccessAction,
  GetMinimumPaymentDateFailAction,
  CloseAlertAction,
} from "./actionTypes";
import { GetDetailsByBarcodeRequest } from "./models/request/getDetailsByBarcode";
import { VerifyIfPaymentCanBeMadeRequest } from "./models/request/verifyIfPaymentCanBeMade";
import { HttpClient } from "_config/http";
import { ApiResponse } from "_config/api";
import { getBaseRequestData } from "_utils/http";
import { GetState } from "redux/state";
import { CreatePaymentRequest } from "./models/request/createPayment";
import { CreatePaymentResponse } from "./models/response/createPayment";
import { CreatePaymentData } from "features/payment/redux/models/createPaymentData";
import { GetDetailsByBarcodeResponse } from "features/payment/redux/models/response/getDetailsByBarcode";
import { GetDetailsOnCipResponse } from "./models/response/getDetailsOnCIP";
import { GetMinimumPaymentDateRequest } from "./models/request/getMinimumPaymentDate";
import { GetMinimumPaymentDateResponse } from "./models/response/getMinimumPaymentDate";
import { BoletoType } from "./models/boletoType";

export const updatePaymentData =
  (paymentData?: CreatePaymentData) => (dispatch: Dispatch) =>
    dispatch<UpdatePaymentAction>({
      type: PaymentAction.UPDATE_PAYMENT,
      payload: paymentData,
    });

export const getDetailsByBarcode =
  (_barcode: string) => async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch<GetDetailsByBarcodeStartAction>({
        type: PaymentAction.GET_DETAILS_BY_BARCODE_START,
      });

      let baseRequestData = await getBaseRequestData(
        "/BoletoPayment/FindInfosPaymentByBarcode",
        getState()
      );
      let { url, defaultHeaders, accountId, token, accountTaxId, userId } =
        baseRequestData;
      let data: GetDetailsByBarcodeRequest = {
        accountId: accountId!,
        userId: userId!,
        taxId: accountTaxId,
        barcode: _barcode,
      };
      const response = await HttpClient.post<GetDetailsByBarcodeResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const barcodePaymentData = response.data.data;
      const type = getState().payment.paymentData?.type;

      let barcodePaymentCIPData: GetDetailsOnCipResponse = response.data.data;

      if (type === BoletoType.BANK) {
        data.barcode = barcodePaymentData.barcode;
        baseRequestData = await getBaseRequestData(
          "/BoletoPayment/FindInfosPaymentCIPByBarcode"
        );
        url = baseRequestData.url;
        defaultHeaders = baseRequestData.defaultHeaders;

        const responseCIP = await HttpClient.post<GetDetailsOnCipResponse>(
          url,
          data,
          {
            headers: {
              ...defaultHeaders,
              Authorization: `Bearer ${token}`,
            },
          }
        );

        barcodePaymentCIPData = responseCIP.data.data;

        const dateConvertTimeZone = new Date(barcodePaymentCIPData?.dueDate!);
        dateConvertTimeZone.setHours(dateConvertTimeZone.getHours() + 3);
        barcodePaymentCIPData.dueDate = new Date(
          dateConvertTimeZone.toString()!
        );
        barcodePaymentCIPData.paymentDate = new Date(
          barcodePaymentCIPData?.paymentDate?.toString()!
        );
      } else if (type === BoletoType.CONCESSIONAIRE) {
        barcodePaymentCIPData.paymentValue = barcodePaymentData.value;
        barcodePaymentCIPData.payerName = barcodePaymentData.bankName;
        barcodePaymentCIPData.receiverName =
          barcodePaymentData.concessionaireName;
        barcodePaymentCIPData.payerTaxId =
          barcodePaymentData.concessionaireCode;
      }

      barcodePaymentCIPData.originalPaymentValue =
        barcodePaymentCIPData.paymentValue;

      dispatch<GetDetailsByBarcodeSuccessAction>({
        type: PaymentAction.GET_DETAILS_BY_BARCODE_SUCCESS,
        payload: {
          barcode: barcodePaymentData.barcode,
          barcodePaymentData: barcodePaymentCIPData,
        },
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetDetailsByBarcodeFailAction>({
        type: PaymentAction.GET_DETAILS_BY_BARCODE_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const verifyIfBoletoCanBePaid =
  (barcode: string) => async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch<VerifyIfPaymentCanBeMadeStartAction>({
        type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_START,
      });

      const { url, defaultHeaders, accountId, userId, token } =
        await getBaseRequestData(
          "/BoletoPayment/VerifiyBoletoCanBePaid",
          getState()
        );

      const data: VerifyIfPaymentCanBeMadeRequest = {
        accountId: accountId!,
        userId: userId!,
        barcode,
      };

      const response = await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      const boletoCanBePaid = response.data.success;

      let statusBoleto = {
        canBePaid: false,
        typeBoleto: BoletoType.NOT_IDENTIFIED,
      };

      const digitTypeIdentifier = parseInt(barcode[0]);

      if (boletoCanBePaid) {
        statusBoleto.canBePaid = true;

        if (digitTypeIdentifier === 8)
          statusBoleto.typeBoleto = BoletoType.CONCESSIONAIRE;
        else if (digitTypeIdentifier >= 0 && digitTypeIdentifier <= 9)
          statusBoleto.typeBoleto = BoletoType.BANK;
        else statusBoleto.typeBoleto = BoletoType.NOT_IDENTIFIED;
      }

      dispatch<VerifyIfPaymentCanBeMadeSuccessAction>({
        type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_SUCCESS,
        payload: {
          canBePaid: statusBoleto.canBePaid,
          type: statusBoleto.typeBoleto,
          barcode,
        },
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<VerifyIfPaymentCanBeMadeFailAction>({
        type: PaymentAction.VERIFY_IF_PAYMENT_CAN_BE_MADE_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getMinimumPaymentDate =
  (barcode: string, chosenDate?: Date) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetMinimumPaymentDateStartAction>({
      type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_START,
    });

    try {
      const { url, defaultHeaders, accountId, userId, token } =
        await getBaseRequestData(
          "/BoletoPayment/FindExpectedBoletoPaymentDate",
          getState()
        );

      const data: GetMinimumPaymentDateRequest = {
        accountId: accountId!,
        userId: userId!,
        actualPaymentDate: chosenDate ?? new Date(),
        barcode: barcode,
      };

      const response = await HttpClient.post<GetMinimumPaymentDateResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const minimumPaymentDate = new Date(
        response.data.data.expectedBoletoPaymentDate
      );
      dispatch<GetMinimumPaymentDateSuccessAction>({
        type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_SUCCESS,
        payload: minimumPaymentDate,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetMinimumPaymentDateFailAction>({
        type: PaymentAction.GET_MINIMUM_PAYMENT_DATE_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const createPayment =
  () => async (dispatch: Dispatch, getState: GetState) => {
    try {
      dispatch<CreatePaymentStartAction>({
        type: PaymentAction.CREATE_PAYMENT_START,
      });

      const state = getState();
      const paymentState = state.payment;
      const paymentData = paymentState.paymentData;
      const { url, defaultHeaders, token, accountId, userId, accountTaxId } =
        await getBaseRequestData("/BoletoPayment", state);

      const data: CreatePaymentRequest = {
        userId: userId!,
        accountId: accountId!,
        name: state.account.account?.name,
        taxId: accountTaxId,
        receiverName: paymentData?.receiverName,
        receiverTaxId: paymentData?.receiverTaxId,
        payerName: paymentData?.payerName,
        payerTaxId: paymentData?.payerTaxId,
        barcode: paymentState.barcode,
        paymentValue: paymentData?.paymentValue,
        paymentDate: paymentData?.paymentDate,
        tags: paymentData?.tags,
        dueDate: paymentData?.dueDate,
        discountValue: paymentData?.discountValue,
        description: paymentData?.description,
      };

      await HttpClient.post<CreatePaymentResponse>(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<CreatePaymentSucessAction>({
        type: PaymentAction.CREATE_PAYMENT_SUCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<CreatePaymentFailAction>({
        type: PaymentAction.CREATE_PAYMENT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const closeAlert = () => (dispatch: Dispatch) => {
  dispatch<CloseAlertAction>({
    type: PaymentAction.CLOSE_ALERT,
  });
};
