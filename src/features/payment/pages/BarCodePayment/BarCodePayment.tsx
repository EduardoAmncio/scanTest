import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";
import { maskBarcode } from "_utils/masks/barCode";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountBalance } from "features/payment/components/AccountBalance";
import { ShowBalanceButton } from "features/payment/components/ShowBalanceButton";
import { nextLabel } from "constants/buttons/labels";
import { PaymentRoutes } from "features/payment/constants/routes";
import { KeyboardArrowRight } from "@material-ui/icons";
import {
  getDetailsByBarcode,
  updatePaymentData,
  verifyIfBoletoCanBePaid,
} from "features/payment/redux/actions";
import { useStyles } from "./BarCodePayment.style";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { BoletoType } from "features/payment/redux/models/boletoType";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";

export const BarCodePayment: React.FC = () => {
  const paymentState = useSelector((state: StoreState) => state.payment);

  const { loading, errorMessage, paymentData, barcode } = paymentState;

  const dispatch = useDispatch();
  const styles = useStyles();
  const history = useHistory();
  const [showBalance, setShowBalance] = React.useState(true);
  const [inputBarCode, setInputBarCode] = useMask(maskBarcode);
  const [disableNextButton, setDisableNextButton] = React.useState(false);

  React.useEffect(() => {
    dispatch(updatePaymentData());
  }, []);

  React.useEffect(() => {
    setDisableNextButton(
      inputBarCode.length !== 53 && inputBarCode.length !== 55
    );
  }, [inputBarCode.length]);

  React.useEffect(() => {
    if (paymentData?.canBePaid) {
      dispatch(getDetailsByBarcode(barcode!));
    }
  }, [paymentData?.canBePaid]);

  React.useEffect(() => {
    if (
      paymentData?.type &&
      paymentData.type !== BoletoType.NOT_IDENTIFIED &&
      paymentData.originalPaymentValue
    )
      history.push(PaymentRoutes.details);
  }, [history, paymentData]);

  const onShowBalanceButtonClick = () => setShowBalance(!showBalance);

  const onScanBarCodeClick = () => {
    history.push(PaymentRoutes.barCodeScanner);
  };

  const onSubmit = () => {
    if (!disableNextButton)
      dispatch(verifyIfBoletoCanBePaid(inputBarCode.replace(/\s/g, "")));
  };

  const onBarCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputBarCode(event.target.value);
  };

  const onBackButtonClick = () => dispatch(updatePaymentData());

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute="/" />}
        header={
          <React.Fragment>
            <ProcessDescriptionHeader
              title="Pagamentos"
              subtitle="Boletos e contas de consumo"
              description="Para pagamentos de boletos e contas de consumo como água, luz, cartão de crédito, etc."
            />
            <Grid container className={styles.optionsSubheader}>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Grid container>
                    <Typography className={styles.balance}>
                      Seu saldo:&nbsp;
                    </Typography>
                    <AccountBalance variant="body1" show={showBalance} />
                  </Grid>
                </Grid>
                <Grid item>
                  <ShowBalanceButton
                    showBalance={showBalance}
                    onClick={onShowBalanceButtonClick}
                  />
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Grid component="form" onSubmit={onSubmit}>
              <TextField
                multiline={true}
                rows="2"
                inputMode="numeric"
                label="Linha digitável"
                value={inputBarCode}
                onChange={onBarCodeChange}
              />
            </Grid>
            {/* <Box>
              <Typography variant="caption">Use a câmera</Typography>
            </Box>
            <Box display="flex" className={styles.optionsSubheader}>
              <Box className={styles.btn}>
                <PaymentReaderButtons
                  title={"Ler código"}
                  subtitle="de barras"
                  icon={cameraIcon}
                  onClick={onScanBarCodeClick}
                ></PaymentReaderButtons>
              </Box>
            </Box> */}
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
                disabled={disableNextButton}
              >
                {nextLabel}
              </Button>
            }
            onBackButtonClick={onBackButtonClick}
          />
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Erro" message={errorMessage} severity={"error"} />
      )}
    </PageContainer>
  );
};
