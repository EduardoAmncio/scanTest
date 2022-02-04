import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { Alert } from "components/Alert";
import { LoginButton } from "features/authentication/components/LoginButton";
import { AuthenticationTitle } from "features/authentication/components/AuthenticationTitle/AuthenticationTitle";
import { StoreState } from "redux/state";
import { Loader } from "components/Loader";
import {
  LoadingAuthState,
  SuccessAuthState,
} from "features/authentication/redux/state";

import { useMask } from "hooks/useMask";
import { maskCpf } from "_utils/masks/taxPayer";
import { useStyle } from "./SignIn.style";
import { login } from "features/authentication/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { AccountRoutes } from "features/account/constants/routes";
import { TextField } from "components/TextField";
import { PasswordField } from "components/PasswordField";

export const SignIn: React.FC = () => {
  const [passwordInput, setPasswordInput] = React.useState("");
  const authState = useSelector((state: StoreState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [taxIdInput, setCpfInput] = useMask(maskCpf);
  const style = useStyle();

  React.useEffect(() => {
    if (authState instanceof SuccessAuthState) {
      history.replace(AccountRoutes.home);
    }
  }, [authState, history]);

  const onCpfChange = (event: any) => {
    setCpfInput(event.target.value);
  };

  const onPasswordChange = (event: any) => {
    setPasswordInput(event.target.value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    dispatch(login(taxIdInput, passwordInput));
  };

  return (
    <Container maxWidth="xs" className={style.container}>
      {authState.errorMessage && (
        <Alert
          title="Erro"
          message={authState.errorMessage}
          severity={"error"}
        />
      )}
      <Grid
        container
        direction="column"
        className={style.contentWrapper}
        component="form"
        onSubmit={onSubmit}
      >
        <Grid item className={style.header}>
          <AuthenticationTitle />
        </Grid>
        <Grid item container direction="column" spacing={3}>
          <Grid item>
            <TextField
              variant="filled"
              value={taxIdInput}
              inputMode="numeric"
              label="CPF"
              placeholder="Digite apenas números"
              onChange={onCpfChange}
            />
          </Grid>
          <Grid item>
            <PasswordField
              variant="filled"
              placeholder="Digite aqui"
              label="Senha"
              value={passwordInput}
              onChange={onPasswordChange}
            />
          </Grid>
          <Grid item>
            <LoginButton />
          </Grid>
          <Grid item className={style.forgotPassword}>
            {/* <ForgotPassword /> */}
          </Grid>
        </Grid>
      </Grid>
      <Loader open={authState instanceof LoadingAuthState} />
    </Container>
  );
};
