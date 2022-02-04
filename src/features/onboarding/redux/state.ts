import { SmsForm } from "./models/smsForm";

export interface OnboardingState {
  smsForm?: SmsForm;
  errorMessage?: string;
  loading: boolean;
}

export class InitialOnboardingState implements OnboardingState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(public smsForm?: SmsForm) {}
}

export class LoadingOnboardingState implements OnboardingState {
  loading: boolean = true;
  errorMessage?: string;

  constructor(public smsForm: SmsForm | undefined) {}
}

export class SuccessOnboardingState implements OnboardingState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(public smsForm: SmsForm | undefined) {}
}

export class FailOnboardingState implements OnboardingState {
  loading: boolean = false;

  constructor(
    public errorMessage: string,
    public smsForm: SmsForm | undefined
  ) {}
}
