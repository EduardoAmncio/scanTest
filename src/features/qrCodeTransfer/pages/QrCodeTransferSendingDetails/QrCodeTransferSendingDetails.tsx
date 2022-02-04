import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./QrCodeTransferSendingDetails.style";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { useHistory } from "react-router-dom";
import { Button } from "components/Button";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Box, Typography } from "@material-ui/core";
import { CurrencyFormatter } from "_translate";
import {
  closeAlert,
  sendQrCodeTransfer,
  updateQrCodeTransferState,
} from "features/qrCodeTransfer/redux/actions";
import {
  InitialQrCodeTransferState,
  LoadingQrCodeTransferState,
  SuccessQrCodeTransferState,
} from "features/qrCodeTransfer/redux/state";
import { Loader } from "components/Loader";
import { AuthorizationSheet } from "components/AuthorizationSheet";
import { Alert } from "components/Alert";
import { QrCodeTransferRoutes } from "features/qrCodeTransfer/constants/routes";
import { usePrevious } from "hooks/usePrevious";

export const QrCodeTransferSendingDetails: React.FC = () => {
  const [openAuthorizationSheet, setOpenAuthorizationSheet] =
    React.useState(false);
  const qrCodeTransferState = useSelector(
    (state: StoreState) => state.qrCodeTransfer
  );
  const { loading, errorMessage } = qrCodeTransferState;
  const history = useHistory();
  const dispatch = useDispatch();
  const styles = useStyles();
  const previousQrCodeTransferState = usePrevious(qrCodeTransferState);

  React.useEffect(() => {
    if (
      qrCodeTransferState instanceof SuccessQrCodeTransferState &&
      previousQrCodeTransferState instanceof LoadingQrCodeTransferState
    )
      history.push(QrCodeTransferRoutes.completedTransfer);
  }, [history, previousQrCodeTransferState, qrCodeTransferState]);

  const _resetState = () =>
    dispatch(updateQrCodeTransferState(new InitialQrCodeTransferState()));

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
    _resetState();
  };

  const onNextButtonClick = () => {
    setOpenAuthorizationSheet(true);
  };

  const onBackButtonClick = () => {
    _resetState();
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  const onAuthorizationSheetClose = (tokenIsValid: boolean) => {
    setOpenAuthorizationSheet(false);

    if (tokenIsValid) dispatch(sendQrCodeTransfer());
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
          <React.Fragment>
            <ProcessDescriptionHeader title="Enviar transferência via QR code" />
            <Box className={`${styles.box} ${styles.valueSection}`}>
              <Typography>Você está pagando</Typography>
              <Typography className={styles.value}>
                {CurrencyFormatter.format(
                  qrCodeTransferState.transferenceData!.value
                )}
              </Typography>
            </Box>
          </React.Fragment>
        }
        main={
          <Box className={styles.box}>
            <Typography>Para</Typography>
            <Typography className={styles.value}>
              {qrCodeTransferState.transferenceData!.name}
            </Typography>
          </Box>
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
      <AuthorizationSheet
        open={openAuthorizationSheet}
        onClose={onAuthorizationSheetClose}
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert
          title="Error"
          message={errorMessage}
          severity="error"
          onClose={onAlertClose}
        />
      )}
    </PageContainer>
  );
};
