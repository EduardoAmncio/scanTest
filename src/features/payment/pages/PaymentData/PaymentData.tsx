import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Box } from "@material-ui/core";
import { TextField } from "components/TextField";
import { AppBar } from "components/AppBar";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ReceiverAndValue } from "features/payment/components/ReceiverAndValue";
import { ShortDateFormatter } from "_translate";
import { useStyles } from "./PaymentData.style";
import { PaymentRoutes } from "features/payment/constants/routes";
import { SchedulingButton } from "components/SchedulingButton";
import { StoreState } from "redux/state";
import { AccountRoutes } from "features/account/constants/routes";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";

import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import {
  closeAlert,
  getMinimumPaymentDate,
  updatePaymentData,
} from "features/payment/redux/actions";
import { BoletoType } from "features/payment/redux/models/boletoType";

export const PaymentData: React.FC = () => {
  const history = useHistory();
  const { barcode, paymentData, minimumPaymentDate, loading, errorMessage } =
    useSelector((state: StoreState) => state.payment);
  const [paymentDate, setPaymentDate] = React.useState<Date | null>(null);
  const [minDate] = React.useState<Date>(new Date());
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const dispatch = useDispatch();
  const style = useStyles();

  React.useEffect(() => {
    dispatch(getMinimumPaymentDate(barcode!, new Date()));
  }, []);

  React.useEffect(() => {
    if (minimumPaymentDate && paymentDate !== minimumPaymentDate)
      setPaymentDate(minimumPaymentDate);
  }, [minimumPaymentDate]);

  const onCancelButtonClick = () => {
    dispatch(updatePaymentData());
    history.replace(AccountRoutes.home);
  };

  const onNextButtonClick = () => {
    history.push(PaymentRoutes.paymentEmptyDescription);
    dispatch(
      updatePaymentData({
        paymentDate: paymentDate || new Date(),
      })
    );
  };

  const onSchedulingButtonClick = () => {
    setOpenDatePicker(true);
  };

  const onDatePickerClose = () => {
    setOpenDatePicker(false);
  };

  const onStartDateChange = (date: Date | null) => {
    if (date) {
      setPaymentDate(date);
      dispatch(getMinimumPaymentDate(barcode!, date));
    }
  };

  const changeValue = () => {
    history.push(PaymentRoutes.changeValue);
  };

  const onAlertClose = () => dispatch(closeAlert());

  const onBackButtonClick = () => dispatch(updatePaymentData());

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
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <React.Fragment>
            <ProcessDescriptionHeader
              title="Pagamentos"
              subtitle="Data do pagamento"
            />
            <Box className={style.marginHeader}>
              <ReceiverAndValue
                receiver={paymentData?.receiverName}
                value={paymentData?.originalPaymentValue}
              />
            </Box>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Box className={style.customChange}>
              {paymentData?.type === BoletoType.BANK && (
                <ButtonWithFloatingIcon onClick={changeValue}>
                  Alterar Valor
                </ButtonWithFloatingIcon>
              )}
            </Box>
            <Box className={style.customTexts}>
              <Typography variant="body2" className={style.dueDateStyle}>
                {paymentData?.dueDate && (
                  <text>
                    Vencimento {ShortDateFormatter.format(paymentData?.dueDate)}
                  </text>
                )}
              </Typography>
            </Box>
            <Grid>
              <Box className={style.customInput}>
                <TextField
                  label="Quando?"
                  placeholder="Hoje"
                  value={
                    paymentDate
                      ? ShortDateFormatter.format(paymentDate)
                      : "Hoje"
                  }
                  onChange={() => {}}
                />
              </Box>
              <Box className={style.customTexts}>
                <Typography variant="caption" className={style.infoText}>
                  Pagamentos realizados em fins de semana ou feriados serão
                  agendados para o próximo dia útil.
                </Typography>
              </Box>
              <Box className={style.buttonDate}>
                <SchedulingButton
                  open={openDatePicker}
                  onClose={onDatePickerClose}
                  value={paymentDate}
                  onDateSelection={onStartDateChange}
                  onClick={onSchedulingButtonClick}
                  minDate={minDate}
                />
              </Box>
            </Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onNextButtonClick}
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
