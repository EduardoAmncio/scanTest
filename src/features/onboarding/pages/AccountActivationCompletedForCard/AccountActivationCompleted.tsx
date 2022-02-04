import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { PageTitle } from "features/onboarding/components/texts/PageTitle";
import { ActivateCardButton } from "features/onboarding/components/buttons/ActivateCardButton";
import { AccessAccountButton } from "features/onboarding/components/buttons/AccessAccountButton";
import "_assets/css/onboarding/finish-activation.scss";

import { useStyles } from "./AccountActivationCompleted.style";

interface AccountActivationCompletedProps {
  activeTwoButtons: boolean;
}

export const AccountActivationCompletedForCard: React.FC<AccountActivationCompletedProps> =
  ({ activeTwoButtons }: AccountActivationCompletedProps) => {
    const style = useStyles();

    return (
      <Container maxWidth="xs" className={style.container}>
        <Box className="finish-activation">
          <Box className="title">
            <PageTitle text="Concluído" />
          </Box>
          <Box className="image"></Box>
          <Box className="welcome-message">
            <Typography variant="caption" display="block" gutterBottom>
              Seja Bem vindo, <strong>Fulano!</strong>
            </Typography>
            <Typography variant="caption">
              É simplesmente uma simulação de texto
            </Typography>
            <Typography variant="caption">
              da indústria tipográfica e de impressos.
            </Typography>
            <Box className={style.accessAccountAlignButton}>
              {activeTwoButtons === true && (
                <Box className={style.acessAccountMarginButtons}>
                  {/* <ActivateCardButton /> */}
                </Box>
              )}
              <AccessAccountButton />
            </Box>
          </Box>
        </Box>
      </Container>
    );
  };
