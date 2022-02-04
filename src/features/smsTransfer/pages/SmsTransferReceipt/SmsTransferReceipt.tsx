import React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { voucher } from "./store";
import { useStyles } from "./SmsTransferReceipt.style";
import { autentication } from "./storeAutentication";
import { ReceiptSummary } from "../../components/ReceiptSummary";
import { TransactionAuthentication } from "../../components/TransactionAuthentication";
import { AccountRoutes } from "features/account/constants/routes";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close } from "@material-ui/icons";
import { closeLabel, saveLabel, shareLabel } from "constants/buttons/labels";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";

export const SmsTransferReceipt: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
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
          <React.Fragment>
            <Box className={styles.description}>
              {voucher.map((v) => (
                <ReceiptSummary
                  value={v.value}
                  name={v.name}
                  number={v.number}
                  date={v.date}
                  description={v.description}
                />
              ))}
            </Box>
            <Box className={styles.separator} />
            <Box className={styles.bottom}>
              {autentication.map((i) => (
                <TransactionAuthentication
                  payment={i.payment}
                  controlProtocol={i.controlProtocol}
                  internalProtocol={i.internalProtocol}
                />
              ))}
            </Box>
            <Box className={styles.buttons}>
              <ButtonWithFloatingIcon size="large">
                {saveLabel}
              </ButtonWithFloatingIcon>
              <ButtonWithFloatingIcon size="large">
                {shareLabel}
              </ButtonWithFloatingIcon>
            </Box>
          </React.Fragment>
        }
      />
    </PageContainer>
  );
};
