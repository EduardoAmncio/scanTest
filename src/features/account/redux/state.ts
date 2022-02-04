import { Account } from "./models/account";
import { BankStatementFilters } from "./models/bankStatementFilters";
import { AccountDashboard } from "./models/dashboard";
import { DayTransactions } from "./models/dayTransactions";
import { TransactionDetails } from "./models/transactionDetails";
import { TransactionReceipt } from "./models/transactionReceipt";
import { User } from "features/authentication/redux/models/user";
import { Transference } from "features/transference/redux/models/transference";

export interface AccountState {
  account?: Account;
  dashboard?: AccountDashboard;
  bankStatement?: DayTransactions[];
  bankStatementFilters?: BankStatementFilters;
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  loading: boolean;
  errorMessage?: string;
  user?: User;
  transference?: Transference;
}

export class InitialAccountState implements AccountState {
  bankStatement?: DayTransactions[];
  errorMessage?: string;
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  loading: boolean = false;

  constructor(
    public account?: Account,
    public dashboard?: AccountDashboard,
    public bankStatementFilters?: BankStatementFilters
  ) {}
}

export class LoadingAccountState implements AccountState {
  loading: boolean = true;
  transactionDetails?: TransactionDetails;
  transactionReceipt?: TransactionReceipt;
  errorMessage?: string | undefined;

  constructor(
    public account: Account | undefined,
    public dashboard: AccountDashboard | undefined,
    public bankStatement: DayTransactions[] | undefined,
    public bankStatementFilters?: BankStatementFilters
  ) {}
}

export class SuccessAccountState implements AccountState {
  loading: boolean = false;
  errorMessage?: string;

  constructor(
    public account: Account,
    public dashboard: AccountDashboard,
    public bankStatement: DayTransactions[] | undefined,
    public transactionDetails?: TransactionDetails,
    public transactionReceipt?: TransactionReceipt,
    public bankStatementFilters?: BankStatementFilters
  ) {}
}

export class FailAccountState implements AccountState {
  loading: boolean = false;

  constructor(
    public errorMessage: string,
    public account?: Account,
    public dashboard?: AccountDashboard,
    public bankStatement?: DayTransactions[]
  ) {}
}

export interface TransferState {
  account?: Account;
  user?: User;
  transference: Transference;
}
export class CancelMoneyTransfer implements AccountState {
  loading: boolean = false;

  constructor(
    public account: Account,
    public user: User,
    public transference: Transference
  ) {}
}
