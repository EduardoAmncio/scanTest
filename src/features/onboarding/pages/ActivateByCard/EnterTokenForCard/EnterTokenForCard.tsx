import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { TokenInput } from "features/onboarding/components/inputs/TokenInput";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { useStyles } from "./EnterTokenForCard.style";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";
import {
  cancelLabel,
  nextLabel,
  resendTokenLabel,
} from "constants/buttons/labels";

interface ResendTokenProsps {
  tokenRoute: string;
}
export const EnterTokenForCard: React.FC<ResendTokenProsps> = ({
  tokenRoute,
}) => {
  const [tokenInput, setTokenInput] = React.useState("");
  const history = useHistory();
  const styles = useStyles();

  const onCancelButtonClick = () => {
    history.go(-7);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.createPasswordForCard);
  };

  const onSendTokenClick = () => {
    history.push(tokenRoute);
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
              subtitle="Código de validação"
              description="Informe o token que você recebeu por SMS para continuar cadastrado."
            />
          </Box>
        }
        main={
          <React.Fragment>
            <Grid direction="column" alignItems="center">
              <Grid>
                <TokenInput onChange={setTokenInput} value={tokenInput} />
              </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Grid item className={styles.bgAlignButton}>
                <ButtonWithFloatingIcon onClick={onSendTokenClick}>
                  {resendTokenLabel}
                </ButtonWithFloatingIcon>
              </Grid>
            </Grid>
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                disabled={tokenInput.length !== 6}
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
