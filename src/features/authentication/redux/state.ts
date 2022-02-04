import { User } from "./models/user";

export interface AuthState {
  token?: string;
  user?: User;
  loading: boolean;
  errorMessage?: string;
}

export class UnauthenticatedState implements AuthState {
  token?: string;
  user?: User;
  loading: boolean = false;
  errorMessage?: string;
}

export class LoadingAuthState implements AuthState {
  token?: string;
  user?: User | undefined;
  loading: boolean = true;
  errorMessage?: string;
}

export class SuccessAuthState implements AuthState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public token: string | undefined,
    public user: User | undefined
  ) {}
}

export class ErrorAuthState implements AuthState {
  token?: string;
  user?: User;
  loading: boolean = false;

  constructor(public errorMessage: string) {}
}
