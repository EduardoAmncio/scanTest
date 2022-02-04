import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { AppBar } from "components/AppBar";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useStyles } from "./CompletedQrCodeTransfer.style";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AccountRoutes } from "features/account/constants/routes";
import IconBgHomeButton from "_assets/icons/Home.svg";
import CompletedTransferIcon from "_assets/img/completedTransfer.svg";
import { useDispatch } from "react-redux";
import IconBgVoucherButton from "_assets/icons/iconBgVoucherButton.svg";
import { updateQrCodeTransferState } from "features/qrCodeTransfer/redux/actions";
import { InitialQrCodeTransferState } from "features/qrCodeTransfer/redux/state";

export const CompletedQrCodeTransfer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const onHomeButtonClick = () => {
    dispatch(updateQrCodeTransferState(new InitialQrCodeTransferState()));
    history.replace(AccountRoutes.home);
  };

  const onVoucherButtonClick = () => {
    dispatch(updateQrCodeTransferState(new InitialQrCodeTransferState()));
    history.replace(AccountRoutes.receipt);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        main={
          <React.Fragment>
            <Typography variant="h3" className={styles.title}>
              Transferência <br />
              concluída
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
            {/*             <Grid item>
              <ButtonWithFloatingIcon
                icon={IconBgVoucherButton}
                size="large"
                onClick={onVoucherButtonClick}
              >
                Comprovante
              </ButtonWithFloatingIcon>
            </Grid> */}
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
