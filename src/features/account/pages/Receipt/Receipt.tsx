import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Divider } from "components/Divider";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { PageContainer } from "components/PageContainer";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { ReceiptDescription } from "features/account/components/ReceiptDescription";
import { Authentication } from "features/account/components/Authentication";
import { AccountRoutes } from "features/account/constants/routes";
import { closeLabel } from "constants/buttons/labels";
import { StoreState } from "redux/state";
import {
  closeAlert,
  getTransactionReceipt,
} from "features/account/redux/actions";

import { useStyles } from "./Receipt.style";
import "_assets/css/forms/mainform.scss";

export const Receipt: React.FC = () => {
  const { state } = useLocation();
  const { loading, transactionReceipt, errorMessage } = useSelector(
    (state: StoreState) => state.account
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    try {
      const { externalIdentifier, operationType } = state as any;

      if (externalIdentifier && operationType)
        dispatch(getTransactionReceipt(externalIdentifier, operationType));
    } catch (error: any) {}
  }, []);

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.bankStatement);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={AccountRoutes.home}
            action={
              <Button
                palette="secondary"
                size="small"
                startIcon={<Close color="primary" />}
                onClick={onCancelButtonClick}
              >
                {closeLabel}
              </Button>
            }
          />
        }
        header={<ProcessDescriptionHeader title="Comprovante" />}
        main={
          <Grid
            container
            direction="column"
            justify="space-between"
            className={styles.content}
          >
            <Grid item>
              <ReceiptDescription receipt={transactionReceipt} />
            </Grid>
            {transactionReceipt?.controlCode && (
              <Grid item>
                <Divider />
                <Authentication
                  controlProtocol={transactionReceipt?.controlCode}
                  internalProtocol={transactionReceipt?.protocolCode}
                />
              </Grid>
            )}
          </Grid>
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert
          severity="error"
          title="Erro"
          message={errorMessage}
          onClose={() => dispatch(closeAlert())}
        />
      )}
    </PageContainer>
  );
};
