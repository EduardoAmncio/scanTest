import React from "react";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PasswordField } from "components/PasswordField";
import { Grid } from "@material-ui/core";
import { useStyles } from "./ConfirmPasswordForSMS.style";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";

export const ConfirmPassword: React.FC = () => {
  const history = useHistory();
  const style = useStyles();

  const [rePasswordInput, setRePasswordInput] = React.useState("");

  const password = useSelector(
    (state: StoreState) => state.onboarding.smsForm?.password
  );

  const onCancelButtonClick = () => {
    history.go(-9);
  };

  const onNextButtonClick = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(OnboardingRoutes.accountActivationCompletedForSMS);
  };

  const onRePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRePasswordInput(event.target.value);

  const onSamePassword = (password: string, rePassoword: string) => {
    if (!(password === rePassoword)) return true;
  };

  const condition = onSamePassword(password!, rePasswordInput);

  return (
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
          subtitle="Crie uma senha para sua conta"
          description="Essa senha deve ter 8 dígitos e deve ter ao menos uma letra."
        />
      }
      main={
        <Grid
          container
          direction="column"
          component="form"
          onSubmit={onNextButtonClick}
        >
          <Grid item>
            <PasswordField value={password!} placeholder="Digite a senha..." />
          </Grid>
          <Grid item className={style.gridItem}>
            <PasswordField
              label="Digite novamente a nova senha"
              value={rePasswordInput}
              placeholder="Digite a senha..."
              onChange={onRePasswordChange}
            />
          </Grid>
        </Grid>
      }
      footer={
        <ProcessPageFooter
          primaryButton={
            <Button
              disabled={condition}
              endIcon={<KeyboardArrowRight color="secondary" />}
              onClick={onNextButtonClick}
            >
              {nextLabel}
            </Button>
          }
        />
      }
    />
  );
};
