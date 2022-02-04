import React from "react";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";
import { maskPhone } from "_utils/masks/phone";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { Box } from "@material-ui/core";

export const EnterPhoneForCard: React.FC = () => {
  const history = useHistory();
  const [phoneInput, setPhoneInput] = useMask(maskPhone);

  const onCancelButtonClick = () => {
    history.go(-6);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterTokenForCard);
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneInput(event.target.value);

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
          <Box>
            <ProcessDescriptionHeader
              title="Ative sua conta"
              subtitle="Informe um número de celular cadastrado"
              description="Você receberá, por mensagem de texto, um código de validação do seu acesso."
            />
          </Box>
        }
        main={
          <React.Fragment>
            <TextField
              label="Celular com DDD"
              value={phoneInput}
              placeholder="(XX) X XXXX.XXXX"
              onChange={onPhoneChange}
              maxValue={11}
            />
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={phoneInput.length !== 16}
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onNextButtonClick}
              >
                {nextLabel}
              </Button>
            }
          />
        }
      />
    </PageContainer>
  );
};
