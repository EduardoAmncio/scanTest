import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { AppBar } from "components/AppBar";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useStyles } from "./CompletedTransfer.style";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AccountRoutes } from "features/account/constants/routes";
import IconBgHomeButton from "_assets/icons/Home.svg";
import IconBgVoucherButton from "_assets/icons/iconBgVoucherButton.svg";
import CompletedTransferIcon from "_assets/img/completedTransfer.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateTransferenceData } from "features/transference/redux/actions";
import { StoreState } from "redux/state";
import { compareTransferDates } from "features/transference/_utils";
import { TransferType } from "features/transference/redux/models/enum";

export const CompletedTransfer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { transferDate, expectedTransferDate, transferType } = useSelector(
    (state: StoreState) => state.transference.transference!
  );
  const styles = useStyles();

  const _transferWasScheduled = () => {
    if (transferType === TransferType.InternalTransfer)
      return compareTransferDates(transferDate!, new Date()) !== 0;

    return compareTransferDates(transferDate!, expectedTransferDate!) !== 0;
  };

  const onHomeButtonClick = () => {
    dispatch(updateTransferenceData());
    history.replace(AccountRoutes.home);
  };

  const onVoucherButtonClick = () => {
    dispatch(updateTransferenceData());
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
              {!_transferWasScheduled() ? "concluída" : "agendada"}
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
            {/*                         <Grid item>
              <ButtonWithFloatingIcon
                icon={IconBgVoucherButton}
                size="large"
                onClick={onHomeButtonClick}
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
