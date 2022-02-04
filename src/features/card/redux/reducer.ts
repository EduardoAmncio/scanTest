import {
  FailCardState,
  BlockAndUnBlockCardsState,
  UpdateCard,
  CardState,
  InitialCardState,
  LoadingCardState,
  SuccessCardState,
} from "./state";
import { CardsAction, CardsActions } from "./actionTypes";

const initialState: CardState = new InitialCardState();

export const cardReducer = (state = initialState, action: CardsAction) => {
  switch (action.type) {
    case CardsActions.FIND_CARD_LIST_START:
    case CardsActions.CHANGE_PIN_CARD_START:
      return new LoadingCardState(state.cards, state.card);

    case CardsActions.FIND_CARD_LIST_SUCCESS:
      return new SuccessCardState(action.payload);

    case CardsActions.CHANGE_PIN_CARD_SUCCESS:
      return new SuccessCardState(state.cards!);

    case CardsActions.UPDATE_PIN_CARD_DATA:
      return new InitialCardState({ ...state.card!, ...action.payload });

    case CardsActions.CHANGE_PIN_CARD_FAIL:
    case CardsActions.FIND_CARD_LIST_FAIL:
      return new FailCardState(action.payload, state.cards);

    case CardsActions.CLOSE_ALERT:
      return new SuccessCardState(state.cards!);

    case CardsActions.SELECT_CARD:
      return new SuccessCardState(state.cards!, action.payload);

    case CardsActions.UPDATE_CARD:
      return new UpdateCard({
        ...state.card,
        ...action.payload!,
      });

    case CardsActions.BLOCN_AND_UNBLOCK_CARD:
      return new BlockAndUnBlockCardsState(state.card!);

    default:
      return state;
  }
};
