import { Account } from "./account";

export interface AccountDashboard {
  accounts: Account[],
  balance: number;
}
