import React from "react";
import {PageContainer} from "components/PageContainer";
import {ProcessPageLayout} from "components/ProcessPageLayout";
import {ProcessPageFooter} from "components/ProcessPageFooter";
import {ProcessDescriptionHeader} from "components/ProcessDescriptionHeader";
import {ReplacementData} from "features/card/components/ReplacementData";
import {OnboardingRoutes} from "features/onboarding/constants/routes";
import {Button} from "components/Button";
import {useStyles} from "./ReplacementDetails.style";
import {AppBar} from "components/AppBar";
import {Box} from "@material-ui/core";
import {closeLabel,concludeLabel} from "constants/buttons/labels";
import {Close,KeyboardArrowRight} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {AccountRoutes} from "features/account/constants/routes";
import {PopUpConfirmPassword} from "features/card/components/PopUp/PopUpConfirmPassword";
import {CardRoutes} from "features/card/constants/routes";

export const ReplacementDetails: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const [openPasswordPopUp, setOpenPasswordPopUp] = React.useState(false);
  const [openFinishedPopUp, setOpenFinishedPopUp] = React.useState(false);
  const onConcludeButtonClick = () => {
    setOpenPasswordPopUp(true);
  };
  const onPasswordCloseButtonClick = () => {
    setOpenPasswordPopUp(false);
  };
  const onPasswordConfirmButtonClick = () => {
    setOpenFinishedPopUp(true);
  };

  const onAlertClick = () => {
    history.push(CardRoutes.cardOption);
  }

  const onCancelButtonClick = () => {
    history.replace(CardRoutes.cardOption);
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
                {closeLabel}
              </Button>
            }
          />
        }
        header={
          <Box className={styles.header}>
            <ProcessDescriptionHeader
              title="Segunda via do cartão"
              subtitle="Revise sua solicitação"
              description="Verifique os dados da solicitação antes de concluir."
            />
          </Box>
        }
        main={
          <Box className="main">
            <ReplacementData
              address="Rua das Cerejeiras, nª 222 - Centro
              Cidade-ES"
              card="ELO - Final 4512"
              deadline="14 dias úteis"
              value={15}
            ></ReplacementData>
          </Box>
        }
        footer={
          <Box>
            <ProcessPageFooter
              primaryButton={
                <Button
                  palette="primary"
                  endIcon={<KeyboardArrowRight color="secondary" />}
                  onClick={onConcludeButtonClick}
                >
                  {concludeLabel}
                </Button>
              }
            />
            <PopUpConfirmPassword 
              open={openPasswordPopUp} 
              onClose={onPasswordCloseButtonClick}
              onClickAlert={onAlertClick}
              alertTitle="Segunda via solicitada"
            />
          </Box>
        }
      />
    </PageContainer>
  );
};