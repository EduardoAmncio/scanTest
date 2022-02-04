import { Card } from "./models/card";
import { ChangePinCard } from "./models/changePinCard";
import { User } from "features/authentication/redux/models/user";

export interface CardState {
  cards?: Card[];
  card?: Card;
  changePinCard?: ChangePinCard[];
  user?: User;
  loading: boolean;
  errorMessage?: string;
}

export class InitialCardState implements CardState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public card?: Card,
    public cards?: Card[],
    public changePinCard?: ChangePinCard[]
  ) {}
}

export class LoadingCardState implements CardState {
  loading: boolean = true;
  errorMessage?: string;

  constructor(
    public cards?: Card[] | undefined,
    public card?: Card,
    public changePinCard?: ChangePinCard[]
  ) {}
}

export class SuccessCardState implements CardState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public cards: Card[],
    public card?: Card,
    public changePinCard?: ChangePinCard[] | undefined
  ) {}
}

export class BlockAndUnBlockCardsState implements CardState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(public card?: Card) {}
}

export class UpdateCard implements CardState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(public card: Card) {}
}
export class FailCardState implements CardState {
  loading: boolean = false;

  constructor(
    public errorMessage: string,
    public cards?: Card[] | undefined,
    public card?: Card | undefined,
    public changePinCard?: ChangePinCard[] | undefined
  ) {}
}
