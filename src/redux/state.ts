import {
  AccountState,
  InitialAccountState,
} from "features/account/redux/state";

import {
  InitialQrCodeTransferState,
  QrCodeTransferState,
} from "features/qrCodeTransfer/redux/state";
import {
  AuthState,
  UnauthenticatedState,
} from "../features/authentication/redux/state";
import {
  PaymentState,
  StartPaymentState,
} from "../features/payment/redux/state";

import {
  TransferenceState,
  InitialTransferenceState,
} from "../features/transference/redux/state";
import {
  InitialUserInformationState,
  UserInformationState,
} from "features/user/redux/state";

import { CardState, InitialCardState } from "features/card/redux/state";

import { InitialTagsState, TagsState } from "features/tags/redux/state";

import {
  OnboardingState,
  InitialOnboardingState,
} from "features/onboarding/redux/state";

import { InitialTopUpState, TopUpState } from "features/topUp/redux/state";

export interface StoreState {
  auth: AuthState;
  account: AccountState;
  userInformation: UserInformationState;
  tags: TagsState;
  payment: PaymentState;
  qrCodeTransfer: QrCodeTransferState;
  transference: TransferenceState;
  card: CardState;
  onboarding: OnboardingState;
  topUp: TopUpState;
}

export const initialStoreState: StoreState = {
  auth: new UnauthenticatedState(),
  account: new InitialAccountState(),
  userInformation: new InitialUserInformationState(),
  tags: new InitialTagsState(),
  payment: new StartPaymentState(),
  qrCodeTransfer: new InitialQrCodeTransferState(),
  transference: new InitialTransferenceState(),
  card: new InitialCardState(),
  onboarding: new InitialOnboardingState(),
  topUp: new InitialTopUpState(),
};

export type GetState = () => StoreState;
