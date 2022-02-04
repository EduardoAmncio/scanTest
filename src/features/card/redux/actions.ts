import { Dispatch } from "redux";
import { ApiResponse } from "_config/api";
import { HttpClient } from "_config/http";
import {
  CardsActions,
  FindAllCardsListFailAction,
  FindAllCardsListStartAction,
  FindAllCardsListSuccessAction,
  ChangePinCardStartAction,
  ChangePinCardSuccessAction,
  ChangePinCardFailAction,
  SelectCardAction,
  UpdateBlockCardStartAction,
  UpdateCardAction,
} from "./actionTypes";
import { GetState } from "redux/state";
import { getBaseRequestData } from "_utils/http";
import { FindCardListResponse } from "./models/response/findCardListResponse";
import { FindCardListRequest } from "./models/request/findCardListRequest";
import { BlockCardRequest } from "./models/request/blockCardRerquest";
import { unBlockCardRequest } from "./models/request/unBlockCardRerquest";
import { ChangePinCardRequest } from "./models/request/changePinCardRequest";
import { Card } from "./models/card";

export const findCardList =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<FindAllCardsListStartAction>({
      type: CardsActions.FIND_CARD_LIST_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token, accountId, userId } =
        await getBaseRequestData("/Card/FindCardList", state);

      const data: FindCardListRequest = {
        taxId: state.account.account?.taxId!,
        accountId: accountId!,
        userId: userId!,
      };

      const response = await HttpClient.post<FindCardListResponse>(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = response.data.data;
      const cards = responseData.cards;
      dispatch<FindAllCardsListSuccessAction>({
        type: CardsActions.FIND_CARD_LIST_SUCCESS,
        payload: cards!,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<FindAllCardsListFailAction>({
        type: CardsActions.FIND_CARD_LIST_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const block =
  (identifierCard: number, pin: string) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<UpdateBlockCardStartAction>({
      type: CardsActions.BLOCN_AND_UNBLOCK_CARD,
    });

    const state = getState();
    const { url, defaultHeaders, token, accountId, userId } =
      await getBaseRequestData("/Card/Block", state);

    const data: BlockCardRequest = {
      accountId: accountId!,
      userId: userId!,
      identifierCard: identifierCard!,
      pin: pin!,
    };

    const response = await HttpClient.post(url, data, {
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
      },
    });
  };

export const unblock =
  (identifierCard: number, pin: string) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<UpdateBlockCardStartAction>({
      type: CardsActions.BLOCN_AND_UNBLOCK_CARD,
    });

    const state = getState();
    const { url, defaultHeaders, token, accountId, userId } =
      await getBaseRequestData("/Card/Unblock", state);

    const data: unBlockCardRequest = {
      accountId: accountId!,
      userId: userId!,
      identifierCard: identifierCard!,
      pin: pin!,
    };

    const response = await HttpClient.post(url, data, {
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${token}`,
      },
    });
  };

export const selectCard = (card?: Card) => (dispatch: Dispatch) => {
  dispatch<SelectCardAction>({
    type: CardsActions.SELECT_CARD,
    payload: card!,
  });
};

export const updateCard = (card?: Card) => (dispatch: Dispatch) => {
  dispatch<UpdateCardAction>({
    type: CardsActions.UPDATE_CARD,
    payload: card,
  });
};

export const changePinCard =
  (changePinCard?: Card) => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<ChangePinCardStartAction>({
      type: CardsActions.CHANGE_PIN_CARD_START,
      payload: changePinCard!,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token, accountId, userId } =
        await getBaseRequestData("/Card/ChangePinCard", state);

      const data: ChangePinCardRequest = {
        identifierCard: state.card?.card?.identifierCard,
        accountId: accountId!,
        userId: userId!,
        currentPin: state.card.card?.currentPin,
        pin: state.card.card?.pin,
        confirmationPin: state.card.card?.confirmationPin,
      };

      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<ChangePinCardSuccessAction>({
        type: CardsActions.CHANGE_PIN_CARD_SUCCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<ChangePinCardFailAction>({
        type: CardsActions.CHANGE_PIN_CARD_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };
