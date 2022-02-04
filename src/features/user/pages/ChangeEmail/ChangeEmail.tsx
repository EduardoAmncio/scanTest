import React from "react";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { useHistory } from "react-router-dom";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AuthorizationSheet } from "components/AuthorizationSheet";
import { TextField } from "components/TextField";
import { AccountRoutes } from "features/account/constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Alert } from "components/Alert";
import { Loader } from "components/Loader";
import { closeAlert } from "features/account/redux/actions";
import { updateUserInformation } from "features/user/redux/actions";
import { UserRoutes } from "features/user/constants/routes";
import { SuccessUpdateUserInformationState } from "features/user/redux/state";
import { updateAuthData } from "features/authentication/redux/actions";

export const ChangeEmail: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const [openAuthorizationSheet, setOpenAuthorizationSheet] =
    React.useState(false);

  const [validatedToken, setValidatedToken] = React.useState(false);

  const { user } = useSelector((store: StoreState) => store.auth);

  const userInformationState = useSelector(
    (store: StoreState) => store.userInformation
  );

  const { loading, errorMessage } = userInformationState;

  const history = useHistory();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      validatedToken &&
      userInformationState instanceof SuccessUpdateUserInformationState
    ) {
      history.push(UserRoutes.changeConclude);
      dispatch(updateAuthData({ ...user, mail: email }));
    }
  }, [dispatch, email, history, userInformationState, user, validatedToken]);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onNextButtonClick = () => {
    setOpenAuthorizationSheet(true);
  };

  const onCancelButtonClick = () => {
    history.go(-1);
  };

  const onAlertClose = () => {
    dispatch(closeAlert());
  };

  const onAuthorizationSheetClose = (isTokenValid: boolean) => {
    if (isTokenValid) {
      setValidatedToken(true);
      dispatch(
        updateUserInformation({
          mail: email,
        })
      );
    }

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
          <ProcessDescriptionHeader
            title="Editar email"
            subtitle={`Seu email atual é: ${user?.mail ?? ""}`}
          />
        }
        main={
          <TextField
            label="Edite seu E-mail"
            type="email"
            placeholder="seuemail@email.com"
            value={email}
            required
            onChange={onEmailChange}
          />
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                endIcon={<KeyboardArrowRight color="secondary" />}
                disabled={!email}
                onClick={onNextButtonClick}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
      <AuthorizationSheet
        open={openAuthorizationSheet}
        description="Para autenticar a operação"
        onClose={onAuthorizationSheetClose}
      />
      {errorMessage && (
        <Alert
          title="Erro"
          message={errorMessage}
          severity={"error"}
          onClose={onAlertClose}
        />
      )}
      <Loader open={loading} />
    </PageContainer>
  );
};
