import { TopUp } from "./models/topUp";
import { Product } from "./models/product";

export enum TopUpActions {
  UPDATE_TOP_UP_DATA = "UPDATE_TOP_UP_DATA",

  GENERATE_TOP_UP_START = "GENERATE_TOP_UP_START",
  GENERATE_TOP_UP_SUCCESS = "GENERATE_TOP_UP_SUCCESS",
  GENERATE_TOP_UP_FAIL = "GENERATE_TOP_UP_FAIL",

  GET_TOP_UP_PRODUCTS_START = "GET_TOP_UP_PRODUCTS_START",
  GET_TOP_UP_PRODUCTS_SUCCESS = "GET_TOP_UP_PRODUCTS_SUCCESS",
  GET_TOP_UP_PRODUCTS_FAIL = "GET_TOP_UP_PRODUCTS_FAIL",

  CLOSE_ALERT = "CLOSE_ALERT",
}

export interface UpdateTopUpDataAction {
  type: TopUpActions.UPDATE_TOP_UP_DATA;
  payload?: TopUp;
}

export interface GenerateTopUpStartAction {
  type: TopUpActions.GENERATE_TOP_UP_START;
}

export interface GenerateTopUpSuccessAction {
  type: TopUpActions.GENERATE_TOP_UP_SUCCESS;
}

export interface GenerateTopUpFailAction {
  type: TopUpActions.GENERATE_TOP_UP_FAIL;
  payload: string;
}

export interface GetTopUpProductsStartAction {
  type: TopUpActions.GET_TOP_UP_PRODUCTS_START;
}

export interface GetTopUpProductsSuccessAction {
  type: TopUpActions.GET_TOP_UP_PRODUCTS_SUCCESS;
  payload: Product;
}

export interface GetTopUpProductsFailAction {
  type: TopUpActions.GET_TOP_UP_PRODUCTS_FAIL;
  payload: string;
}

export interface CloseAlertAction {
  type: TopUpActions.CLOSE_ALERT;
}

export type TopUpAction =
  | UpdateTopUpDataAction
  | GenerateTopUpStartAction
  | GenerateTopUpSuccessAction
  | GenerateTopUpFailAction
  | GetTopUpProductsStartAction
  | GetTopUpProductsSuccessAction
  | GetTopUpProductsFailAction
  | CloseAlertAction;
