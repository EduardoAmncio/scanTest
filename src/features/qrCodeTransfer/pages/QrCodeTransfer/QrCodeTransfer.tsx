import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import QrCellphoneRight from "_assets/icons/QrCellphoneRight.svg";
import QrCellphoneLeft from "_assets/icons/QrCellphoneLeft.svg";
import { cancelLabel } from "constants/buttons/labels";
import { AccountRoutes } from "features/account/constants/routes";
import { QrCodeTransferRoutes } from "features/qrCodeTransfer/constants/routes";
import { PageContainer } from "components/PageContainer/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { SelectionCard } from "components/SelectionCard";
import { useStyles } from "./QrCodeTransfer.style";
import { useDispatch } from "react-redux";
import { updateQrCodeTransferState } from "features/qrCodeTransfer/redux/actions";
import { InitialQrCodeTransferState } from "features/qrCodeTransfer/redux/state";

import { generateApplicationHeaders } from "../../../authentication/utils";

export const QrCodeTransfer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    dispatch(updateQrCodeTransferState(new InitialQrCodeTransferState()));
  }, [dispatch]);

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onSendClick = () => {
    history.push(QrCodeTransferRoutes.readQrCodeTransfer);
  };

  const onReceiveClick = () => {
    history.push(QrCodeTransferRoutes.generateQrCodeTransfer);
    console.log("cliquei");
    generateApplicationHeaders();
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
            title="Transfer??ncia QR code"
            subtitle="Como deseja realizar a transfer??ncia?"
            description="Pode ser para uma conta banc??ria ou por mensagem de texto no celular, mesmo que o benefici??rio n??o tenha conta banc??ria."
          />
        }
        main={
          <Box className={styles.main}>
            <SelectionCard
              title="Pagar"
              subtitle="Envie dinheiro r??pido, basta apontar a c??mera para o QR Code"
              endIcon={QrCellphoneRight}
              onClick={onSendClick}
            />
            <SelectionCard
              title="Receber"
              subtitle="Gere um QR Code para receber"
              endIcon={QrCellphoneLeft}
              onClick={onReceiveClick}
            />
          </Box>
        }
        footer={<ProcessPageFooter />}
      />
    </PageContainer>
  );
};
