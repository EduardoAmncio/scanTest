import React from "react";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { DigitsCardProps } from "features/onboarding/components/inputs/CardDigitsInput";

export const EnterDigitsForCard: React.FC = () => {
  const history = useHistory();
  const [digitsCardInput, setDigitsCardInput] = React.useState("");

  const onCancelButtonClick = () => {
    history.go(-5);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.enterBirthdayForCard);
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
              subtitle="Hora de ativar seu cartão"
              description="Para identificarmos seus dados, insira os 4 últimos digitos do número do seu cartão."
            />
          </Box>
        }
        main={
          <React.Fragment>
            <Grid container direction="column" alignItems="center">
              <Grid item component="form">
                <DigitsCardProps
                  onChange={setDigitsCardInput}
                  value={digitsCardInput}
                />
              </Grid>
            </Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={digitsCardInput.length !== 4}
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
