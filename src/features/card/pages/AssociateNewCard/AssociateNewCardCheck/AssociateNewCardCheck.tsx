import React from "react";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Button } from "components/Button";
import { AppBar } from "components/AppBar";
import { Close } from "@material-ui/icons";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { cancelLabel } from "constants/buttons/labels";
import { nextLabel } from "constants/buttons/labels";
import { CardRoutes } from "features/card/constants/routes";
import { PageContainer } from "components/PageContainer";
import { useStyles } from "./AssociateNewCardCheck.style";
import { Box, Typography } from "@material-ui/core";
import { CardData } from "features/card/components/CardData";
import elo from "_assets/img/EloImage.svg";
import { AccountRoutes } from "features/account/constants/routes";

export const AssociateNewCardCheckData: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardManagement);
  };
  const onNextButtonClick = () => {
    history.push(CardRoutes.validationTokenPasswordAssociate);
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
          <Box className={styles.boxHeader}>
            <ProcessDescriptionHeader
              title="Associar novo cartão"
              subtitle="Confira os dados do seu novo cartão"
            />
          </Box>
        }
        main={
          <Box className="boxMain">
            <Box className={styles.boxCardUser}>
              <CardData
                fullName="José D Silva"
                panLastDigits={4512}
                flagCard={elo}
              />
            </Box>
            <Box className={styles.boxValidity}>
              <Typography className={styles.validity}>Validade:</Typography>
              <Typography className={styles.data}>11/26</Typography>
            </Box>
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
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
