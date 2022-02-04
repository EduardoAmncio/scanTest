import React from "react";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { useStyles } from "./AllAccounts.style";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { Divider } from "components/Divider";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { changeAccount } from "features/account/redux/actions";
import { Account } from "features/account/redux/models/account";
import { AccountCard } from "features/account/components/AccountCard";
import { Grid } from "@material-ui/core";
import { SearchField } from "components/SearchField";
import Check from "_assets/icons/Check.svg";

export const AllAccounts: React.FC = () => {
  const { loading, dashboard, account, errorMessage } = useSelector(
    (state: StoreState) => state.account
  );
  const [displayAccounts, setAccounts] = React.useState(dashboard!.accounts);
  const style = useStyles();
  const { accounts } = dashboard!;
  const dispatch = useDispatch();

  const _search = (value: string) => {
    value = value.replace(/^\s+|\s+$/, "");
    const result = dashboard!.accounts.filter((account) =>
      account.name.toLowerCase().includes(value.toLowerCase())
    );
    setAccounts(result);
  };

  const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    _search(event.target.value);
  };

  const onAccountClick = (account: Account) => {
    dispatch(changeAccount(account));
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        header={
          <React.Fragment>
            <ProcessDescriptionHeader title={"Todas as Contas"} />
            <AccountCard
              account={account!}
              endIcon={Check}
              className={style.currentAccount}
            />
            <Divider spacing={2} />
          </React.Fragment>
        }
        main={
          <Grid container direction="column" spacing={2}>
            <Grid item className={style.searcField}>
              <SearchField
                placeholder="Busque pelo nome da conta"
                onChange={onSearchFieldChange}
              />
            </Grid>

            <Grid item>
              <Grid container direction="column">
                {displayAccounts.map((x, index) => {
                  const accountComponent = (
                    <AccountCard
                      key={x.name}
                      account={x}
                      endIcon={
                        account?.accountId === x.accountId ? Check : undefined
                      }
                      onClick={() => onAccountClick(x)}
                    />
                  );
                  if (index < displayAccounts.length - 1)
                    return (
                      <Grid item>
                        {accountComponent}
                        <Divider spacing={1} />
                      </Grid>
                    );

                  return (
                    <Grid item>
                      {accountComponent}
                      {index < displayAccounts.length - 1 && (
                        <Divider spacing={0} />
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        }
        footer={<ProcessPageFooter />}
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Erro" message={errorMessage} severity="error" />
      )}
    </PageContainer>
  );
};
