import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { AccessAccountButton } from "features/onboarding/components/buttons/AccessAccountButton";
import { ActivateCardButton } from "features/onboarding/components/buttons/ActivateCardButton";
import { createAccountFromSms } from "features/onboarding/redux/actions";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/onboarding/finish-activation.scss";
import "./AccountActivationCompleted.scss";
import { StoreState } from "redux/state";
import { useHistory } from "react-router";
import { AuthenticationRoutes } from "features/authentication/constants/routes";

interface AccountActivationCompletedProps {
  activeTwoButtons: boolean;
}

export const AccountActivationCompleted: React.FC<AccountActivationCompletedProps> =
  ({ activeTwoButtons }) => {
    const state = useSelector((s: StoreState) => s.onboarding);
    const dispatch = useDispatch();
    const history = useHistory();
    const style = useStyle();

    React.useEffect(() => {
      if (state.smsForm) dispatch(createAccountFromSms());
    }, [state.smsForm]);

    return (
      <Container maxWidth="xs" className={style.container}>
        <div className="finish-activation">
          <Typography variant="h6" className="title">
            Concluído
          </Typography>

          <div className="image"></div>
          <div className="welcome-message">
            <Typography variant="caption" display="block" gutterBottom>
              Seja Bem vindo,&nbsp;
              <strong>{state.smsForm?.name?.split(" ")[0]}!</strong>
            </Typography>
            <Typography variant="caption" align="center" gutterBottom>
              Cadastro completo com sucesso!
              <br />
              Sua conta será ativada em instantes!
            </Typography>
            <div
              className="accessAccountAlignButton"
              onClick={() => history.replace(AuthenticationRoutes.signIn)}
            >
              <AccessAccountButton />
            </div>
          </div>
        </div>
      </Container>
    );
  };
