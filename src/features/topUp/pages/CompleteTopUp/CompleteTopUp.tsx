import React from "react";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { cancelLabel } from "constants/buttons/labels";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
// import TimIcon from "_assets/icons/TimIcon.svg";
import { AccountRoutes } from "features/account/constants/routes";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./CompleteTopUp.style";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { CurrencyFormatter, DateFormatter } from "_translate";
import { AuthorizationSheet } from "components/AuthorizationSheet";
import { generateTopUp, updateTopUpData } from "features/topUp/redux/actions";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { SuccessTopUpState } from "features/topUp/redux/state";

export const CompleteTopUp: React.FC = () => {
  const topUp = useSelector((state: StoreState) => state.topUp.topUp);
  const topUpState = useSelector((state: StoreState) => state.topUp);

  const [openAuthorizationSheet, setOpenAuthorizationSheet] =
    React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const { errorMessage, loading } = topUpState;

  React.useEffect(() => {
    if (topUpState instanceof SuccessTopUpState) {
      history.push(TopUpRoutes.concludeTopUp);
      dispatch(updateTopUpData());
    }
  }, [topUpState, history, dispatch]);

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onConcludeButtonClick = () => {
    setOpenAuthorizationSheet(true);
  };

  const onAuthorizationClose = (tokenIsValid: boolean) => {
    if (tokenIsValid) dispatch(generateTopUp());
    setOpenAuthorizationSheet(false);
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
          <Box className={styles.headerContent}>
            <ProcessDescriptionHeader
              title="Recargas"
              subtitle="Celular pr??-pago"
              description={"Recarregar o n??mero " + topUp?.phoneNumber}
            />
          </Box>
        }
        main={
          <React.Fragment>
            {/* <Grid container>
              <Grid item className={styles.handleText}>
                <img src={TimIcon} alt="Tim Icon" />
              </Grid>
            </Grid> */}

            <Typography className={styles.handleText}>Operadora</Typography>
            <Typography className={styles.handleSubText}>
              {topUp?.topUpProduct?.description}
            </Typography>

            <Typography className={styles.handleText}>Valor</Typography>
            <Typography className={styles.handleSubText}>
              {CurrencyFormatter.format(topUp?.topUpProduct?.productValue!)}
            </Typography>
            <Typography className={styles.handleTextPhone}>Celular</Typography>
            <Typography className={styles.handleSubTextPhone}>
              {topUp?.phoneNumber}
            </Typography>
            <Typography className={styles.handleTimeTopUp}>
              Data da recarga
            </Typography>
            <Typography className={styles.handleSubTextTopUp}>
              {DateFormatter.format(new Date(Date.now()))}
            </Typography>
            {/* <Typography className={styles.handleRepeatTopUp}>
              Repetir recarga
            </Typography>
            <Typography className={styles.handleSubRepeatTopUp}>
              N??o repetir
            </Typography> */}
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                onClick={onConcludeButtonClick}
                size="medium"
                endIcon={<KeyboardArrowRight />}
              >
                Concluir
              </Button>
            }
          />
        }
      />
      <AuthorizationSheet
        description="Est?? tudo certo? Agora ?? s?? inserir seu token para confirmar a recarga"
        open={openAuthorizationSheet}
        onClose={onAuthorizationClose}
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Error" message={errorMessage} severity="error" />
      )}
    </PageContainer>
  );
};
