import { Card } from "./models/card";
import { ChangePinCard } from "./models/changePinCard";

export enum CardsActions {
  FIND_CARD_LIST_START = "FIND_CARD_LIST_START",
  FIND_CARD_LIST_SUCCESS = "FIND_CARD_LIST_SUCCESS",
  FIND_CARD_LIST_FAIL = "FIND_CARD_LIST_FAIL",

  CHANGE_PIN_CARD_START = "CHANGE_PIN_CARD_START",
  CHANGE_PIN_CARD_SUCCESS = "CHANGE_PIN_CARD_SUCCESS",
  CHANGE_PIN_CARD_FAIL = "CHANGE_PIN_CARD_FAIL",
  UPDATE_PIN_CARD_DATA = "UPDATE_PIN_CARD_DATA",

  SELECT_CARD = "SELECT_CARD",
  UPDATE_CARD = "UPDATE_CARD",
  CLOSE_ALERT = "CLOSE_ALERT",

  BLOCN_AND_UNBLOCK_CARD = "BLOCN_AND_UNBLOCK_CARD",
}

export interface FindAllCardsListStartAction {
  type: CardsActions.FIND_CARD_LIST_START;
}

export interface FindAllCardsListSuccessAction {
  type: CardsActions.FIND_CARD_LIST_SUCCESS;
  payload: Card[];
}

export interface FindAllCardsListFailAction {
  type: CardsActions.FIND_CARD_LIST_FAIL;
  payload: string;
}
export interface UpdatePinCardDataAction {
  type: CardsActions.UPDATE_PIN_CARD_DATA;
  payload?: Card;
}
export interface ChangePinCardStartAction {
  type: CardsActions.CHANGE_PIN_CARD_START;
  payload: Card;
}

export interface ChangePinCardSuccessAction {
  type: CardsActions.CHANGE_PIN_CARD_SUCCESS;
}

export interface ChangePinCardFailAction {
  type: CardsActions.CHANGE_PIN_CARD_FAIL;
  payload: string;
}

export interface SelectCardAction {
  type: CardsActions.SELECT_CARD;
  payload: Card;
}

export interface UpdateCardAction {
  type: CardsActions.UPDATE_CARD;
  payload?: Card;
}
export interface UpdateBlockCardStartAction {
  type: CardsActions.BLOCN_AND_UNBLOCK_CARD;
  payload?: Card;
}

export interface CloseAlertAction {
  type: CardsActions.CLOSE_ALERT;
  payload: Card[];
}

export type CardsAction =
  | FindAllCardsListStartAction
  | FindAllCardsListSuccessAction
  | FindAllCardsListFailAction
  | SelectCardAction
  | UpdateCardAction
  | CloseAlertAction
  | UpdateBlockCardStartAction
  | UpdatePinCardDataAction
  | ChangePinCardStartAction
  | ChangePinCardSuccessAction
  | ChangePinCardFailAction
  | CloseAlertAction;
