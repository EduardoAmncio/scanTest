import React, { useState } from "react";
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
import { InputToken } from "features/card/components/Inputs/InputToken";
import { PageContainer } from "components/PageContainer";
import { Box } from "@material-ui/core";
import { useStyles } from "./ValidateNewPassword.style";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { AccountRoutes } from "features/account/constants/routes";

export const ValidateNewPassword: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const [alertVisibility, setVisibility] = useState(false);
  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardManagement);
  };
  const onNextButtonClick = () => {
    history.push(CardRoutes.enterNewPasswordAssociate);
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
          <ProcessDescriptionHeader
            title="Criar senha do Cartão"
            subtitle="Código de validação"
            description="Informe o Token que você recebeu por SMS para firmar a mudança de senha"
          />
        }
        main={
          <Box className="boxMain">
            <Box className={styles.boxAlertConcluid}></Box>
            <InputToken />
            <Box className={styles.boxbtn}>
              <ButtonWithFloatingIcon>Reenviar Token</ButtonWithFloatingIcon>
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
