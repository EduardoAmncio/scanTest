import React from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { CardRoutes } from "features/card/constants/routes";
import { PasswordInput } from "features/card/components/Inputs/PasswordInput";
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./EnterNewPassword.style";
import { StoreState } from "redux/state";
import { Card } from "features/card/redux/models/card";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "features/card/redux/actions";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";

export const EnterNewPassword: React.FC = () => {
  const [card, loading, errorMessage] = useSelector<
    StoreState,
    [Card | undefined, boolean, string | undefined]
  >((state) => [state.card.card, state.card.loading, state.card.errorMessage]);

  const [displayCards, setDisplayCards] = React.useState(card);
  const history = useHistory();
  const style = useStyles();
  const dispatch = useDispatch();
  const [pin, setPasswordInput] = React.useState("");
  const [disableNextButton, setDisableNextButton] = React.useState(false);
  const onCancelButtonClick = () => {
    history.replace(CardRoutes.cardOption);
  };

  React.useEffect(() => {
    setDisableNextButton(pin.length !== 4);
  }, [pin.length]);

  React.useEffect(() => {
    setDisplayCards(card);
  }, [card]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateCard({ ...card!, pin: pin }));
    history.push(CardRoutes.confirmNewPassword);
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
          <Box className={style.header}>
            <ProcessDescriptionHeader
              title="Alterar senha do Cart??o"
              subtitle={`Cart??o final ${displayCards?.panLastDigits}`}
              description="Agora escolha uma nova senha num??rica de 4 d??gitos"
            />
          </Box>
        }
        main={
          <Box component="form" onSubmit={onSubmit} className={style.main}>
            <PasswordInput
              label="Nova senha do cart??o"
              onChange={setPasswordInput}
              value={pin}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
                disabled={disableNextButton}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Error" message={errorMessage} severity="error" />
      )}
    </PageContainer>
  );
};
