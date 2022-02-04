import React from "react";
import { AppBar } from "components/AppBar";
import { Close } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AccountRoutes } from "features/account/constants/routes";
import { QrCodeReader } from "components/QrCodeReader";
import { useHistory } from "react-router-dom";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { cancelLabel } from "constants/buttons/labels";
import { QrCodeTransferRoutes } from "features/qrCodeTransfer/constants/routes";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./ReadQrCodeTransfer.style";

export const ReadQrCodeTransfer: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  return (
    <PageContainer className={styles.container}>
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
          <Typography align="center">
            <ProcessDescriptionHeader
              title="Enviar transferência via QR Code"
              subtitle="Alinhe o QR code do recebedor na marcação da tela"
            />
          </Typography>
        }
        main={
          <Box className={styles.main}>
            <QrCodeReader nextRoute={QrCodeTransferRoutes.sendQrCodeTransfer} />
          </Box>
        }
        footer={<ProcessPageFooter />}
      />
    </PageContainer>
  );
};
