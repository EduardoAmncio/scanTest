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
import { AccountRoutes } from "features/account/constants/routes";
import { useStyles } from "./ConfirmNewPassword.style";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Card } from "features/card/redux/models/card";
import { Validator } from "features/card/components/Validator/Validator";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { updateCard } from "features/card/redux/actions";

export const ConfirmNewPassword: React.FC = () => {
  const [card, loading, errorMessage] = useSelector<
    StoreState,
    [Card | undefined, boolean, string | undefined]
  >((state) => [state.card.card, state.card.loading, state.card.errorMessage]);

  const history = useHistory();
  const style = useStyles();
  const dispatch = useDispatch();
  const [confirmationPin, setPasswordInput] = React.useState("");
  const [displayCards, setDisplayCards] = React.useState(card);
  const [disableNextButton, setDisableNextButton] = React.useState(false);
  const [passwordValidate, setPasswordValidate] = React.useState<
    boolean | undefined
  >();
  const onCancelButtonClick = () => {
    history.replace(CardRoutes.cardOption);
  };

  React.useEffect(() => {
    setPasswordValidate(card?.pin === confirmationPin);
  }, [confirmationPin]);

  React.useEffect(() => {
    setDisableNextButton(confirmationPin.length !== 4);
  }, [passwordValidate]);

  React.useEffect(() => {
    setDisplayCards(card);
  }, [card]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateCard({ ...card!, confirmationPin: confirmationPin }));
    history.push(CardRoutes.validationTokenPassword);
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
              title={"Alterar senha do Cartão "}
              subtitle={`Cartão final ${displayCards?.panLastDigits}`}
              description="Agora insira novamente a sua nova senha"
            />
          </Box>
        }
        main={
          <Box onSubmit={onSubmit} className={style.main}>
            <Validator
              label={"Confirmar senha"}
              value={confirmationPin}
              setValue={setPasswordInput}
              strictValidation={passwordValidate}
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
