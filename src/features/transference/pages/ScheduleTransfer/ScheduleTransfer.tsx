import React from "react";
import { Grid } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountRoutes } from "features/account/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useHistory } from "react-router-dom";
import { TextField } from "components/TextField";
import { SchedulingButton } from "components/SchedulingButton";
import { ShortDateFormatter } from "_translate";
import { PageContainer } from "components/PageContainer";
import { useStyles } from "./ScheduleTransfer.style";
import { TransferenceRoutes } from "features/transference/constants/routes";
import {
  getExpectedTransferDate,
  updateTransferenceData,
} from "features/transference/redux/actions";
import { StoreState } from "redux/state";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { TransferType } from "features/transference/redux/models/enum";
import { compareTransferDates } from "features/transference/_utils";
import { ConfirmSchedulingDialog } from "features/transference/components/ConfirmSchedulingDialog";

export const ScheduleTransfer: React.FC = () => {
  const [transferDate, setTransferDate] = React.useState<Date | null>(null);
  const [displayDate, setDisplayDate] = React.useState("");
  const [minDate, setMinDate] = React.useState<Date>(new Date());
  const [choseDate, setChoseDate] = React.useState(false);
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const { expectedTransferDate, transferType, toName, loading, errorMessage } =
    useSelector((state: StoreState) => ({
      expectedTransferDate:
        state.transference.transference?.expectedTransferDate,
      transferType: state.transference.transference?.transferType,
      toName: state.transference.transference?.toName,
      loading: state.transference.loading,
      errorMessage: state.transference.errorMessage,
    }));

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    if (_isMoneyTransfer()) dispatch(getExpectedTransferDate());

    setDisplayDate(_getDisplayDate());
  }, []);

  React.useEffect(() => {
    if (expectedTransferDate && !transferDate) {
      setMinDate(expectedTransferDate);
      setTransferDate(expectedTransferDate);
    }
  }, [expectedTransferDate, transferDate]);

  React.useEffect(() => {
    setDisplayDate(_getDisplayDate());
  }, [transferDate]);

  const _isMoneyTransfer = () => transferType === TransferType.MoneyTransfer;

  const _getDisplayDate = () => {
    const today = "Hoje";

    if (!transferDate) return today;
    else if (compareTransferDates(transferDate, new Date()) === 0) return today;
    else return ShortDateFormatter.format(transferDate);
  };

  const _transferDateIsValid = () => {
    return (
      transferDate &&
      expectedTransferDate &&
      compareTransferDates(transferDate, expectedTransferDate) === 0
    );
  };

  const _goToNextPage = () => {
    history.push(TransferenceRoutes.description);
  };

  const onSchedulingButtonClick = () => {
    setOpenDatePicker(true);
  };

  const onDatePickerClose = () => {
    setOpenDatePicker(false);
  };

  const onDateChange = (date: Date | null) => {
    setTransferDate(date);
  };

  const onConfirmSchedulingDialogClose = (confirmedScheduling: boolean) => {
    if (confirmedScheduling) {
      dispatch(updateTransferenceData({ transferDate }));
      _goToNextPage();
      return;
    }

    setChoseDate(false);
  };

  const onCancelButtonClick = () => {
    dispatch(updateTransferenceData());
    history.go(transferType === TransferType.InternalTransfer ? -5 : -9);
  };

  const onNextButtonClick = () => {
    setChoseDate(true);

    if (!_isMoneyTransfer() || _transferDateIsValid()) {
      dispatch(
        updateTransferenceData({ transferDate: transferDate ?? new Date() })
      );
      _goToNextPage();
      return;
    }

    dispatch(
      getExpectedTransferDate(transferDate === null ? undefined : transferDate)
    );
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
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <ProcessDescriptionHeader
            title="Transferência"
            subtitle="Quando deseja transferir?"
            description={`Escolhendo a data de hoje, ${toName} receberá o valor em breve.`}
          />
        }
        main={
          <Grid container direction="column">
            <Grid item>
              <TextField label="Quando?" value={displayDate} />
            </Grid>
            <Grid item>
              <Grid
                container
                justify="center"
                className={styles.scheduleButton}
              >
                <Grid item>
                  <SchedulingButton
                    open={openDatePicker}
                    value={transferDate}
                    minDate={minDate}
                    onClick={onSchedulingButtonClick}
                    onDateSelection={onDateChange}
                    onClose={onDatePickerClose}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={_isMoneyTransfer() && !expectedTransferDate}
                onClick={onNextButtonClick}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Erro" message={errorMessage} severity="error" />
      )}
      {choseDate && !_transferDateIsValid() && !loading && (
        <ConfirmSchedulingDialog
          open={choseDate}
          onClose={onConfirmSchedulingDialogClose}
        />
      )}
    </PageContainer>
  );
};
