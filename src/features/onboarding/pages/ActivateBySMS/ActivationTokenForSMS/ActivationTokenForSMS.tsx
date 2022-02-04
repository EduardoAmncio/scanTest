import React from "react";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TokenInput } from "features/onboarding/components/inputs/TokenInput";
import {
  cancelLabel,
  nextLabel,
  resendTokenLabel,
} from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import IconBgButton from "_assets/icons/buttonBg.svg";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { useStyles } from "./ActivateTokenForSMS.style";
import {
  closeAlert,
  validateActivationToken,
} from "features/onboarding/redux/actions";
import { StoreState } from "redux/state";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";

interface ResendTokenProsps {
  tokenRoute: string;
}

export const ActivationToken: React.FC<ResendTokenProsps> = ({
  tokenRoute,
}: ResendTokenProsps) => {
  const [token, setToken] = React.useState("");
  const { smsForm, loading, errorMessage } = useSelector(
    (state: StoreState) => state.onboarding
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    if (smsForm?.phoneNumber) history.push(OnboardingRoutes.createNameForSMS);
  }, [history, smsForm]);

  const onCancelButtonClick = () => {
    history.go(-3);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.length === 6) dispatch(validateActivationToken(token));
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  const onSendTokenClick = () => {
    history.push(tokenRoute);
  };

  return (
    <React.Fragment>
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
            subtitle="Código de Validação"
            description="Informe o Token que você recebeu por SMS para continuar o cadastro."
          />
        }
        main={
          <React.Fragment>
            <Grid direction="column" alignItems="center">
              <Grid>
                <TokenInput onChange={setToken} value={token} />
              </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Grid item className={styles.bgAlignButton}>
                <ButtonWithFloatingIcon
                  icon={IconBgButton}
                  onClick={onSendTokenClick}
                >
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
                disabled={token.length !== 6}
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
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
    </React.Fragment>
  );
};
