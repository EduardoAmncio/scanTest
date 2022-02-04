import React, { useState } from "react";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Button } from "components/Button";
import { AppBar } from "components/AppBar";
import { Close } from "@material-ui/icons";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { cancelLabel } from "constants/buttons/labels";
import { nextLabel } from "constants/buttons/labels";
import { CardRoutes } from "features/card/constants/routes";
import { InputToken } from "features/card/components/Inputs/InputToken";
import { PageContainer } from "components/PageContainer";
import { Box } from "@material-ui/core";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { useStyles } from "./ValidationTokenPassword.style";
import { AccountRoutes } from "features/account/constants/routes";
import { AlertConcluded } from "components/AlertConcluded";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { ApiResponse } from "_config/api";
import { getBaseRequestData } from "_utils/http";
import { HttpClient } from "_config/http";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { changePinCard } from "features/card/redux/actions";
import { Card } from "features/card/redux/models/card";

interface AuthorizationSheetState {
  loading: boolean;
  message?: string;
  success?: boolean;
  validatedToken?: boolean;
}

interface AuthorizationSheetProps {
  nextRoute?: string;
}

export const ValidationTokenPassword: React.FC<AuthorizationSheetProps> = ({
  nextRoute,
}) => {
  const styles = useStyles();
  const history = useHistory();
  const [alertVisibility, setVisibility] = useState(false);
  const [disableConfirmButton, setDisableConfirmButton] = React.useState(true);
  const [token, setToken] = React.useState("");
  const dispatch = useDispatch();

  const [cards] = useSelector<StoreState, [Card | undefined]>((state) => [
    state.card.card,
  ]);

  const [accountId, userId, requestToken] = useSelector((state: StoreState) => {
    return [
      state.account.account!.accountId,
      state.auth.user!.id,
      state.auth.token,
    ];
  });

  const [{ loading, success, validatedToken, message }, setState] =
    React.useState<AuthorizationSheetState>({
      loading: false,
    });

  const onShowAlert = () => {
    setVisibility(true);
  };
  const onCancelButtonClick = () => {
    history.replace(CardRoutes.cardOption);
  };

  const onClickAlert = () => {
    history.replace(AccountRoutes.home);
  };

  React.useEffect(() => {
    generateToken();
  }, []);

  React.useEffect(() => {
    if (loading) setDisableConfirmButton(true);
    if (token.length === 6 && !loading) setDisableConfirmButton(false);
    else setDisableConfirmButton(true);
  }, [history, loading, nextRoute, token.length]);

  const generateToken = async () => {
    setState({ loading: true });

    try {
      const { url, defaultHeaders } = await getBaseRequestData(
        "/AuthorizationToken"
      );
      const data = {
        userId,
        accountId,
      };

      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${requestToken}`,
        },
      });
      setState({
        loading: false,
        success: true,
        message: "Token gerado com sucesso, por favor aguarde o envio.",
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;
      setState({
        loading: false,
        message: response?.message ?? error.message,
      });
    }
  };

  const onTokenChange = (newValue: string) => {
    setToken(newValue);
  };

  const onResendTokenButtonClick = () => {
    generateToken();
  };

  const onConfirmButtonClick = async () => {
    setState({ loading: true });
    try {
      const { url, defaultHeaders } = await getBaseRequestData(
        "/AuthorizationToken/ValidateAuthorizationToken"
      );
      const data = {
        code: token,
        userId,
        accountId,
      };
      dispatch(changePinCard(cards));
      await HttpClient.post(url, data, {
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${requestToken}`,
        },
      });
      setState({
        loading: true,
        success: true,
        validatedToken: true,
        message: "Token validado com sucesso.",
      });
    } catch (error: any) {
      let response: ApiResponse | undefined;
      if (error.response) response = error.response?.data;
      console.log(error);
      setState({
        loading: false,
        validatedToken: false,
        message: "Não foi possível validar seu token.",
      });

      let responseCard: Card | undefined;
      if (error.responseCard) responseCard = error.response?.data;
      console.log(error);
      setState({
        loading: false,
        validatedToken: false,
        message: "Não foi possível validar sua senha.",
      });
    }
  };

  return (
    <React.Fragment>
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
            <ProcessDescriptionHeader
              title="Alterar senha do Cartão"
              subtitle="Código de validação"
              description="Informe o Token que você recebeu por SMS para firmar a mudança de senha"
            />
          }
          main={
            <Box className="boxMain">
              <Box className={styles.boxAlertConcluded}>
                <AlertConcluded
                  title="Concluído"
                  onClick={onClickAlert}
                  open={alertVisibility}
                />
              </Box>
              <InputToken value={token} onChange={onTokenChange} />

              <Box className={styles.containerbutton}>
                <ButtonWithFloatingIcon onClick={onResendTokenButtonClick}>
                  Reenviar Token
                </ButtonWithFloatingIcon>
              </Box>
            </Box>
          }
          footer={
            <ProcessPageFooter
              primaryButton={
                <Button
                  palette="primary"
                  endIcon={<KeyboardArrowRight color="secondary" />}
                  disabled={disableConfirmButton}
                  onClick={onConfirmButtonClick}
                >
                  {nextLabel}
                </Button>
              }
            />
          }
        />
      </PageContainer>
      <Loader open={loading} />
      {message && (
        <Alert
          title={success ? "Sucesso" : "Erro"}
          message={message}
          severity={success ? "success" : "error"}
          onClose={validatedToken ? onShowAlert : undefined}
        />
      )}
    </React.Fragment>
  );
};
