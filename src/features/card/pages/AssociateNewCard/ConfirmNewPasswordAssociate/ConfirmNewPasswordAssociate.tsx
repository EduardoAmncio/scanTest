import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import React, { useState } from "react";
import { PasswordInput } from "features/card/components/Inputs/PasswordInput";
import { useStyles } from "./ConfirmNewPasswordAssociate.style";
import { AccountRoutes } from "features/account/constants/routes";
import { useHistory } from "react-router-dom";
import { CardRoutes } from "features/card/constants/routes";
import { AlertConcluded } from "components/AlertConcluded";
import { Box } from "@material-ui/core";

export const ConfirmNewPasswordAssociate: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const [onShowPopUp, setOnShowPopUp] = useState(false);
  const [passwordInput, setPasswordInput] = React.useState("");
  const onCancelButton = () => history.push(CardRoutes.cardManagement);
  const onNextButton = () => {
    setOnShowPopUp(true);
  };
  const onClickAlert = () => history.push(CardRoutes.cardOption);
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
                onClick={onCancelButton}
              >
                {cancelLabel}
              </Button>
            }
          />
        }
        header={
          <Box className={styles.header}>
            <ProcessDescriptionHeader
              title={"Criar senha do Cartão"}
              subtitle={"Cartão final 4512"}
              description={"Agora insira novamente a sua nova senha"}
            />
          </Box>
        }
        main={
          <Box>
            <PasswordInput
              value={passwordInput}
              label={"Confirmar senha"}
              onChange={setPasswordInput}
            />
            <AlertConcluded
              title="Concluído"
              open={onShowPopUp}
              onClick={onClickAlert}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                onClick={onNextButton}
                endIcon={<KeyboardArrowRight color="secondary" />}
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
