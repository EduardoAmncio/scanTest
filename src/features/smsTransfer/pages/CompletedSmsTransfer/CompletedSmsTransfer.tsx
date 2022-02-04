import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { AppBar } from "components/AppBar";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useStyles } from "./CompletedSmsTransfer.style";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AccountRoutes } from "features/account/constants/routes";
import IconBgHomeButton from "_assets/icons/Home.svg";
import IconReceiptButton from "_assets/icons/Receipt.svg";
import CompletedTransferIcon from "_assets/img/completedTransfer.svg";
import { SmsTransferRoutes } from "features/smsTransfer/constants/routes";

export const CompletedSmsTransfer: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  const onReceiptButtonClick = () => {
    history.push(SmsTransferRoutes.smsTransferReceipt);
  };

  const onHomeButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        main={
          <React.Fragment>
            <Typography variant="h3" className={styles.title}>
              Transferência <br />
              por celular concluída.
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                className={styles.img}
                src={CompletedTransferIcon}
                alt="Completed transfer"
              />
            </Box>
          </React.Fragment>
        }
        footer={
          <Grid container spacing={4} justify="center">
            {
              <Grid item>
                <ButtonWithFloatingIcon
                  icon={IconReceiptButton}
                  size="large"
                  onClick={onReceiptButtonClick}
                >
                  Comprovante
                </ButtonWithFloatingIcon>
              </Grid>
            }
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
    </PageContainer>
  );
};
