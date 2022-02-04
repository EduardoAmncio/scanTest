import React from "react";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TextField } from "components/TextField";
import { useMask } from "hooks/useMask";
import { maskTaxPayer } from "_utils/masks/taxPayer";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { Grid } from "@material-ui/core";

interface EnterTaxPayerForCardProps {}

export const EnterTaxPayerForCard: React.FC<EnterTaxPayerForCardProps> = () => {
  const history = useHistory();

  const [taxIdInput, setTaxIdInput] = useMask(maskTaxPayer);

  const onTaxIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTaxIdInput(event.target.value);

  const onCancelButtonClick = () => {
    history.go(-3);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterIdentifierForCard);
  };

  return (
    <PageContainer>
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
            subtitle="Que bom que seu cartão já está com você"
            description="Agora precisamos confirmar seu CPF."
          />
        }
        main={
          <React.Fragment>
            <Grid container direction="column">
              <Grid item component="form">
                <TextField
                  label="CPF"
                  value={taxIdInput}
                  placeholder="Digite apenas números"
                  onChange={onTaxIdChange}
                  maxValue={16}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={taxIdInput.length !== 14 && taxIdInput.length !== 18}
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
