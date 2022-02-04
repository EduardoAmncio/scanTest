import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { DayTransactions } from "features/account/components/DayTransactions";
import { AccountRoutes } from "features/account/constants/routes";
import { StoreState } from "redux/state";
import { Alert } from "components/Alert";
import { Loader } from "components/Loader";
import { SearchField } from "components/SearchField/SearchField";
import { AppBar } from "components/AppBar";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import {
  closeAlert,
  getAccountDashboard,
  getBankStatement,
} from "features/account/redux/actions";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountBalance } from "features/account/components/AccountBalance";
import filterIcon from "_assets/icons/icn-filtro.svg";
import { useStyles } from "./BankStatement.style";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { useEffect } from "react";
import { useState } from "react";

export const BankStatement: React.FC = () => {
  const [searchValue, setsearchValue] = useState("");
  const accountState = useSelector((store: StoreState) => store.account);

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();
  const { loading, bankStatement, errorMessage } = accountState;

  const [updatedBankStatement, setUpdatedBankStatement] =
    React.useState(bankStatement);

  React.useEffect(() => {
    dispatch(getAccountDashboard());
    dispatch(getBankStatement());
  }, []);

  React.useEffect(() => {
    setUpdatedBankStatement(bankStatement);
  }, [bankStatement]);

  const onMoreFiltersButtonClick = () => {
    history.push(AccountRoutes.filter);
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  const removeSpecials = (text: string) => {
    const textFormatted = text
      .replace(/[àáâãäå]/, "a")
      .replace(/[èéêë]/, "e")
      .replace(/[íìïî]/, "i")
      .replace(/[òóôö]/, "o")
      .replace(/[úùûü]/, "u")
      .replace(/[ç]/, "c");
    return textFormatted;
  };

  useEffect(() => {
    const lowerSearchValue = removeSpecials(searchValue.toLowerCase());

    let filteredBankStatement = bankStatement
      ?.map((bankstatement) => {
        const filteredTransactions = bankstatement.transactions?.filter(
          (transaction) => {
            return (
              transaction.title.toLowerCase().includes(lowerSearchValue) ||
              removeSpecials(transaction.title)
                .toLowerCase()
                .includes(lowerSearchValue) ||
              transaction.tags?.forEach((tag) =>
                tag.toLowerCase().includes(lowerSearchValue)
              )
            );
          }
        );
        return {
          ...bankstatement,
          transactions: filteredTransactions,
        };
      })
      .filter((bankStatement) => !!bankStatement.transactions?.length);

    setUpdatedBankStatement(filteredBankStatement);
  }, [searchValue, bankStatement]);

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <React.Fragment>
            <ProcessDescriptionHeader
              title="Extrato"
              description="Acompanhe a movimentação da sua conta com todos os detalhes de suas movimentações."
            />
            <Box display="flex" className={styles.balanceSubheader}>
              <Typography>Seu saldo&nbsp;</Typography>
              <AccountBalance size="small" variant="body1" show />
            </Box>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <SearchField placeholder="Busque por nome ou Tag" />
            <Grid container justify="space-between" className={styles.filters}>
              <Grid item>
                <Typography variant="subtitle2">Filtrar por:</Typography>
              </Grid>
              <Grid item>
                <ButtonWithFloatingIcon
                  icon={filterIcon}
                  onClick={onMoreFiltersButtonClick}
                >
                  Mais filtros
                </ButtonWithFloatingIcon>
              </Grid>
            </Grid>
            {updatedBankStatement?.map((dayTransactions, i) => (
              <DayTransactions key={i} dayTransactions={dayTransactions} />
            ))}
          </React.Fragment>
        }
        footer={<ProcessPageFooter />}
        footerPosition="fixed"
      />

      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <Loader open={loading} />
    </PageContainer>
  );
};
