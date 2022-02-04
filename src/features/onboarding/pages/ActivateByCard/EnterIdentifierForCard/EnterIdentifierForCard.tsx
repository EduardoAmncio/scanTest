import React from "react";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useMask } from "hooks/useMask";
import { maskIdCard } from "_utils/masks/idCard";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";
import { ReadQrCodeButton } from "features/card/components/ReadQrCodeButton";
import { TextField } from "components/TextField";

export const EnterIdentifierForCard: React.FC = () => {
  const history = useHistory();
  const [idInput, setIdInput] = useMask(maskIdCard);

  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setIdInput(event.target.value);

  const onCancelButtonClick = () => {
    history.replace(OnboardingRoutes.activateAccount);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterDigitsCard);
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
          <Box>
            <ProcessDescriptionHeader
              title="Ative sua conta"
              subtitle="Identificar seu cartão"
              description="Insira o código de identificação de 9 dígitos impresso em seu cartão."
            />
          </Box>
        }
        main={
          <React.Fragment>
            <TextField
              label="Insira o ID CARD de 9 dígitos"
              value={idInput}
              onChange={onIdChange}
              maxValue={9}
            />
            <ReadQrCodeButton />
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={idInput.length !== 9}
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
