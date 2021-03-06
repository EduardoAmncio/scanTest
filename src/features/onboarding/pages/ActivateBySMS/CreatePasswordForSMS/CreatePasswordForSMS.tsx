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
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./CreatePasswordForSMS.style";
import { Validator } from "components/Validator/Validator";
import {
  validateLowerUpperNumber,
  validateLength,
  validateSpecial,
  validateSequenceLength,
} from "_utils/validate";
import { useDispatch } from "react-redux";
import { updateSmsForm } from "features/onboarding/redux/actions";

export const CreatePassword: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [disableNextButton, setDisableNextButton] = React.useState(false);
  const [passwordLengthIsValid, setPasswordLenghtIsValid] = React.useState<
    boolean | undefined
  >();
  const [passwordLowerIsValid, setPasswordLowerIsValid] = React.useState<
    boolean | undefined
  >();
  const [passwordUpperIsValid, setPasswordUpperIsValid] = React.useState<
    boolean | undefined
  >();
  const [passwordSpecialIsValid, setPasswordSpecialIsValid] = React.useState<
    boolean | undefined
  >();
  const [passwordValidateNumber, setPasswordValidateNUmber] = React.useState<
    boolean | undefined
  >();
  // const [passwordValidateSequence, setPasswordValidateSequence] =
  //   React.useState<boolean | undefined>();

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const condition =
    passwordLengthIsValid &&
    passwordLowerIsValid &&
    passwordUpperIsValid &&
    passwordSpecialIsValid &&
    passwordValidateNumber;

  React.useEffect(() => {
    setDisableNextButton(!(condition && passwordLengthIsValid));
  }, [condition, passwordLengthIsValid]);

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const onValidateLength = (value: boolean | undefined) => {
    setPasswordLenghtIsValid(value);
  };

  const onValidateLowerUpperNumber = (value: boolean | undefined) => {
    setPasswordLowerIsValid(value);
    setPasswordUpperIsValid(value);
    setPasswordValidateNUmber(value);
  };

  const onCancelButtonClick = () => {
    history.go(-8);
  };

  const onNextButtonClick = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      updateSmsForm({
        password,
      })
    );
    history.push(OnboardingRoutes.confirmPasswordForSMS);
  };

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
          description="Essa senha deve ter 8 d??gitos e deve ter ao menos uma letra."
        />
      }
      main={
        <Grid
          container
          direction="column"
          spacing={3}
          onSubmit={onNextButtonClick}
        >
          <Grid item component="form" className={styles.input}>
            <PasswordField
              label="Senha"
              value={password}
              placeholder="Digite a senha..."
              onChange={onPasswordChange}
            />
          </Grid>

          <Grid item>
            <Typography className={styles.description}>
              Sua senha deve atender os crit??rios a baixo:
            </Typography>
          </Grid>

          <Grid item>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Validator
                  value={password}
                  description={"Ao menos um caractere especial"}
                  isValid={passwordSpecialIsValid}
                  validation={validateSpecial}
                  onValidate={setPasswordSpecialIsValid}
                  strictValidation={false}
                />
              </Grid>
              <Grid item>
                <Validator
                  value={password}
                  description={"No m??nimo 8 caracteres e no m??ximo 16"}
                  isValid={passwordLengthIsValid}
                  validation={validateLength}
                  onValidate={onValidateLength}
                  strictValidation={false}
                />
              </Grid>
              <Grid item>
                <Validator
                  value={password}
                  description={"Letras mai??sculas, min??sculas e n??meros"}
                  isValid={
                    passwordUpperIsValid &&
                    passwordLowerIsValid &&
                    passwordValidateNumber
                  }
                  validation={() => validateLowerUpperNumber(password)}
                  onValidate={onValidateLowerUpperNumber}
                  strictValidation={false}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
      footer={
        <ProcessPageFooter
          primaryButton={
            <Button
              disabled={disableNextButton}
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
