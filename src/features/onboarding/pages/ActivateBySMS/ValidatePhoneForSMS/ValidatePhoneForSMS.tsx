import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { useHistory } from "react-router-dom";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import {
  cancelLabel,
  nextLabel,
  resendTokenLabel,
} from "constants/buttons/labels";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Grid } from "@material-ui/core";
import { TokenInput } from "features/onboarding/components/inputs/TokenInput";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useStyles } from "./ValidatePhoneForSMS.style";
import React from "react";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAlert,
  generateAuthorizationToken,
  validateAuthorizationToken,
} from "features/onboarding/redux/actions";
import { StoreState } from "redux/state";
import { PageContainer } from "components/PageContainer";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { SuccessOnboardingState } from "features/onboarding/redux/state";

interface ResendTokenProsps {
  tokenRoute: string;
}

export const ValidatePhone: React.FC<ResendTokenProsps> = ({ tokenRoute }) => {
  const [tokenInput, setTokenInput] = React.useState("");
  const state = useSelector((s: StoreState) => s.onboarding);
  const dispatch = useDispatch();
  const history = useHistory();
  const style = useStyles();

  const { loading, smsForm, errorMessage } = state;

  React.useEffect(() => {
    dispatch(generateAuthorizationToken());
  }, []);

  React.useEffect(() => {
    if (state instanceof SuccessOnboardingState && tokenInput.length === 6)
      history.push(OnboardingRoutes.createPasswordForSMS);
  }, [state]);

  const onCancelButtonClick = () => {
    history.go(-7);
  };

  const onNextButtonClick = () => {
    if (tokenInput.length === 6)
      dispatch(validateAuthorizationToken(tokenInput));
  };

  const onSendTokenClick = () => {
    dispatch(generateAuthorizationToken());
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={OnboardingRoutes.welcome}
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
            title="Ative sua Conta"
            subtitle="Validar seu celular"
            description="Informe o Token que voc?? recebeu por SMS para continuar o cadastro."
          />
        }
        main={
          <React.Fragment>
            <Grid container direction="column" alignItems="center">
              <Grid item component="form">
                <TokenInput onChange={setTokenInput} value={tokenInput} />
              </Grid>
              <Grid item className={style.bgAlignButton}>
                <ButtonWithFloatingIcon onClick={onSendTokenClick}>
                  {resendTokenLabel}
                </ButtonWithFloatingIcon>
              </Grid>
            </Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={tokenInput.length !== 6}
                endIcon={<KeyboardArrowRight color="secondary" />}
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
