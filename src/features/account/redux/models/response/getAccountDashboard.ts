import { Account } from "../account";

export interface GetAccountDashboardResponse {
  account: Account;
  balance: number;
  accounts: Account[];
}
