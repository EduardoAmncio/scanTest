import React from "react";
import { useStyles } from "./InvalidDataForCard.style";
import Alert from "_assets/img/AlertWarningImg.svg";
import { Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Button } from "components/Button";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";

export const InvalidDataForCard: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const onButtonClick = () => {
    history.replace(OnboardingRoutes.welcome);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        main={
          <React.Fragment>
            <Box>
              <ProcessDescriptionHeader title="Ops..." />
            </Box>
            <Box className={styles.alert}>
              <img src={Alert} alt="Alert" />
            </Box>
            <Box className={styles.errorMensage}>
              <Typography>
                <strong> Algo não está certo.</strong>
              </Typography>
            </Box>
            <Box className={styles.inconsistent}>
              <Typography>
                <strong> Os dados estão inconsistentes.</strong>
              </Typography>
              <Box className={styles.textDescription}>
                <Typography className={styles.description}>
                  Revise os dados e tente novamente.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.button}>
              <Button onClick={onButtonClick}>Voltar para o início</Button>
            </Box>
          </React.Fragment>
        }
      />
    </PageContainer>
  );
};
