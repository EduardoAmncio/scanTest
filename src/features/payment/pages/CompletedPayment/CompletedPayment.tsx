import React from "react";
import { PageContainer } from "components/PageContainer";
import { AppBar } from "components/AppBar";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import IconBgHomeButton from "_assets/icons/Home.svg";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useStyles } from "./CompletedPayment.style";
import IconBgVoucherButton from "_assets/icons/Receipt.svg";
import image from "_assets/img/completedTransfer.svg";
import { PageTitle } from "features/payment/components/PageTitle";
import { useHistory } from "react-router-dom";
import { PaymentRoutes } from "features/payment/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Box, Grid, Typography } from "@material-ui/core";
import { closeAlert, updatePaymentData } from "features/payment/redux/actions";

export const CompletedPayment: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const paymentState = useSelector((state: StoreState) => state.payment);
  const { loading, errorMessage } = paymentState;

  const onHomeButtonClick = () => {
    dispatch(updatePaymentData());
    history.replace(AccountRoutes.home);
  };

  const onProofButtonClick = () => {
    history.push(PaymentRoutes.paymentReceipt);
  };

  const onAlertClose = () => dispatch(closeAlert());

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        main={
          <React.Fragment>
            <Typography variant="h3" className={styles.completeTitle}>
              <PageTitle text="Pagamento Concluído" />
            </Typography>
            <Box display="flex" justifyContent="center">
              <img className={styles.completedImagem} src={image} />
            </Box>
          </React.Fragment>
        }
        footer={
          <Grid container spacing={4} justify="center">
            <Grid item>
              <ButtonWithFloatingIcon
                icon={IconBgVoucherButton}
                size="large"
                onClick={onProofButtonClick}
              >
                Comprovante
              </ButtonWithFloatingIcon>
            </Grid>
            <Grid item>
              <ButtonWithFloatingIcon
                icon={IconBgHomeButton}
                size="large"
                onClick={onHomeButtonClick}
              >
                Início
              </ButtonWithFloatingIcon>
            </Grid>
          </Grid>
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
    </PageContainer>
  );
};
