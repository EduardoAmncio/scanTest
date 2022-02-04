import { Dispatch } from "redux";
import { ApiResponse } from "_config/api";
import { HttpClient } from "_config/http";
import {
  AccountActions,
  CloseAlertAction,
  CancelMoneyTransferStartAction,
  CancelMoneyTransferSuccessAction,
  CancelMoneyTransferFailAction,
  GetAccountDashboardFailAction,
  GetAccountDashboardStartAction,
  GetAccountDashboardSuccessAction,
  GetBankStatementFailAction,
  GetBankStatementStartAction,
  GetBankStatementSuccessAction,
  GetAllAccountsFailAction,
  GetAllAccountsStartAction,
  GetAllAccountsSuccessAction,
  GetTransactionReceiptSuccessAction,
  GetTransactionReceiptFailAction,
  GetTransactionDetailsStartAction,
  GetTransactionDetailsSuccessAction,
  GetTransactionDetailsFailAction,
  GetTransactionReceiptStartAction,
  SelectAccountAction,
  SetBankStatementFiltersAction,
  ChangeAccountStartAction,
  ChangeAccountSuccessAction,
  ChangeAccountFailAction,
} from "./actionTypes";
import { AccountDashboard } from "features/account/redux/models/dashboard";
import { GetAccountDashboardRequest } from "features/account/redux/models/request/getAccountDashboard";
import { GetAccountDashboardResponse } from "features/account/redux/models/response/getAccountDashboard";
import { GetState } from "redux/state";
import { getBaseRequestData } from "_utils/http";
import { GetBankStatementResponse } from "./models/response/getBankStatement";
import { GetBankStatementRequest } from "./models/request/getBankStatement";
import { GetAccountByLoginResponse } from "./models/response/getAccountListByLogin";
import { GetAccountListByLoginRequest } from "./models/request/getAccountListByLogin";
import { TransactionReceipt } from "./models/transactionReceipt";
import { GetTransactionReceiptResponse } from "./models/response/getTransactionReceipt";
import { GetTransactionReceiptRequest } from "./models/request/getTransactionReceipt";
import { OperationType } from "./models/operationType";
import { GetTransactionDetailsRequest } from "./models/request/getTransactionDetails";
import { GetTransactionDetailsResponse } from "./models/response/getTransactionDetails";
import { CancelMoneyTransferRequest } from "./models/request/cancelMoneyTransfer";
import { TransactionDetails } from "./models/transactionDetails";
import { BankStatementFilters } from "./models/bankStatementFilters";
import { Account } from "./models/account";
import { CancelMoneyTransferResponse } from "./models/response/CancelMoneyTransfer";

export const getAccountDashboard =
  (accountId?: number) => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetAccountDashboardStartAction>({
      type: AccountActions.GET_ACCOUNT_DASHBOARD_START,
    });

    try {
      const {
        url,
        defaultHeaders,
        userTaxId: taxId,
        userId,
        accountId,
        token,
      } = await getBaseRequestData("/Account/FindAccountDashboard", getState());
      const data: GetAccountDashboardRequest = {
        login: taxId!,
        userId: userId!,
        accountId: accountId!,
      };

      const response = await HttpClient.post<GetAccountDashboardResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { account, accounts, balance } = response.data.data;
      const dashboard: AccountDashboard = {
        accounts,
        balance,
      };

      dispatch<GetAccountDashboardSuccessAction>({
        type: AccountActions.GET_ACCOUNT_DASHBOARD_SUCCESS,
        payload: {
          account: account,
          dashboard,
        },
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetAccountDashboardFailAction>({
        type: AccountActions.GET_ACCOUNT_DASHBOARD_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getBankStatement =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetBankStatementStartAction>({
      type: AccountActions.GET_BANK_STATEMENT_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, accountTaxId, token, userId, accountId } =
        await getBaseRequestData("/Account/FindBankStatement", state);

      const filters: BankStatementFilters = Object.create(
        state.account.bankStatementFilters ?? null
      );

      if (!filters.startDate) {
        filters.startDate = new Date();
        filters.startDate.setDate(filters.startDate.getDate() - 7);
      }

      filters.endDate = filters.endDate ?? new Date();

      const data: GetBankStatementRequest = {
        taxId: accountTaxId!,
        bank: state.account.account?.bank,
        bankBranch: state.account?.account?.bankBranch,
        bankAccount: state.account?.account?.bankAccount,
        bankAccountDigit: state.account.account?.bankAccountDigit,
        accountId: accountId!,
        startDate: filters.startDate,
        endDate: filters.endDate,
        transactionType: filters.transactionType,
        tags: filters.tags,
        userId: userId!,
      };

      const response = await HttpClient.post<GetBankStatementResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data.data;
      const dayTransactionsList = responseData.transactions;
      dispatch<GetBankStatementSuccessAction>({
        type: AccountActions.GET_BANK_STATEMENT_SUCCESS,
        payload: dayTransactionsList,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetBankStatementFailAction>({
        type: AccountActions.GET_BANK_STATEMENT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getTransactionDetails =
  (id: string, operationType: OperationType) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetTransactionDetailsStartAction>({
      type: AccountActions.GET_TRANSACTION_DETAILS_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token, accountId, userId } =
        await getBaseRequestData("/Account/FindBankStatementDetails", state);

      const data: GetTransactionDetailsRequest = {
        accountId: accountId!,
        userId: userId!,
        externalIdentifier: id,
        operationType,
      };

      const response = await HttpClient.post<GetTransactionDetailsResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data.data;
      const details: TransactionDetails = {
        ...responseData,
        date: responseData.date ? new Date(responseData.date) : undefined,
      };
      dispatch<GetTransactionDetailsSuccessAction>({
        type: AccountActions.GET_TRANSACTION_DETAILS_SUCCESS,
        payload: details,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetTransactionDetailsFailAction>({
        type: AccountActions.GET_TRANSACTION_DETAILS_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const getTransactionReceipt =
  (id: string, operationType: OperationType) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetTransactionReceiptStartAction>({
      type: AccountActions.GET_TRANSACTION_RECEIPT_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, token, accountId, userId } =
        await getBaseRequestData("/Account/FindBankStatementReceipt", state);

      const data: GetTransactionReceiptRequest = {
        accountId: accountId!,
        userId: userId!,
        externalIdentifier: id,
        operationType,
      };

      const response = await HttpClient.post<GetTransactionReceiptResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data.data;
      const receipt: TransactionReceipt = {
        ...responseData,
        date: responseData.date ? new Date(responseData.date) : null,
      };
      dispatch<GetTransactionReceiptSuccessAction>({
        type: AccountActions.GET_TRANSACTION_RECEIPT_SUCCESS,
        payload: receipt,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetTransactionReceiptFailAction>({
        type: AccountActions.GET_TRANSACTION_RECEIPT_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const changeAccount =
  (newAccount: Account) => async (dispatch: Dispatch) => {
    try {
      dispatch<ChangeAccountStartAction>({
        type: AccountActions.CHANGE_ACCOUNT_START,
      });

      dispatch<ChangeAccountSuccessAction>({
        type: AccountActions.CHANGE_ACCOUNT_SUCCESS,
        payload: newAccount,
      });
    } catch (error: any) {
      dispatch<ChangeAccountFailAction>({
        type: AccountActions.CHANGE_ACCOUNT_FAIL,
        payload: "Falha ao mudar a conta do usuário",
      });
    }
  };
export const getAccountList =
  () => async (dispatch: Dispatch, getState: GetState) => {
    dispatch<GetAllAccountsStartAction>({
      type: AccountActions.GET_ALL_ACCOUNTS_START,
    });

    try {
      const state = getState();
      const { url, defaultHeaders, accountTaxId, token, accountId, userId } =
        await getBaseRequestData("Account/FindAllAccountsByTaxId", state);

      const data: GetAccountListByLoginRequest = {
        login: accountTaxId!,
        accountId: accountId!,
        userId: userId!,
      };

      const response = await HttpClient.post<GetAccountByLoginResponse>(
        url,
        data,
        {
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = response.data.data;
      const { accounts } = responseData;
      dispatch<GetAllAccountsSuccessAction>({
        type: AccountActions.GET_ALL_ACCOUNTS_SUCCESS,
        payload: accounts,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<GetAllAccountsFailAction>({
        type: AccountActions.GET_ALL_ACCOUNTS_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };

export const selectAccount = (accountId: number) => (dispatch: Dispatch) => {
  dispatch<SelectAccountAction>({
    type: AccountActions.SELECT_ACCOUNT,
    payload: accountId,
  });
};

export const setBankStatementFilters = (
  filters: BankStatementFilters
): SetBankStatementFiltersAction => ({
  type: AccountActions.SET_BANK_STATEMENT_FILTERS,
  payload: filters,
});

export const closeAlert = () => (dispatch: Dispatch) => {
  dispatch<CloseAlertAction>({
    type: AccountActions.CLOSE_ALERT,
  });
};

export const cancelMoneyTransfer =
  (externalIdentifier: string) =>
  async (dispatch: Dispatch, getState: GetState) => {
    dispatch<CancelMoneyTransferStartAction>({
      type: AccountActions.CANCEL_MONEY_TRANSFER_START,
    });

    const state = getState();
    try {
      const { url, defaultHeaders, token } = await getBaseRequestData(
        "/MoneyTransfer/CancelMoneyTransfer",
        state
      );

      const data: CancelMoneyTransferRequest = {
        externalIdentifier: externalIdentifier,
        accountId: state?.account.account?.accountId,
        userId: state?.auth.user?.id,
      };

      await HttpClient.post<CancelMoneyTransferResponse>(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch<CancelMoneyTransferSuccessAction>({
        type: AccountActions.CANCEL_MONEY_TRANSFER_SUCCESS,
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;

      dispatch<CancelMoneyTransferFailAction>({
        type: AccountActions.CANCEL_MONEY_TRANSFER_FAIL,
        payload: response?.message ?? error.message,
      });
    }
  };
