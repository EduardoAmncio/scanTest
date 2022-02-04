import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import React from "react";
import { useStyles } from "./EnterNewPasswordAssociate.style";
import { AppBar } from "components/AppBar";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { PasswordInput } from "features/card/components/Inputs/PasswordInput";
import { useHistory } from "react-router-dom";
import { CardRoutes } from "features/card/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { Box } from "@material-ui/core";

export const EnterNewPasswordAssociate: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  const [passwordInput, setPasswordInput] = React.useState("");
  const onNextPage = () => history.push(CardRoutes.confirmNewPasswordAssociate);
  const onCancelButton = () => history.push(CardRoutes.cardManagement);
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
              description={"Agora escolha uma senha numérica de 4 dígitos para"}
            />
          </Box>
        }
        main={
          <Box>
            <PasswordInput
              value={passwordInput}
              label={"Nova senha do cartão"}
              onChange={setPasswordInput}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                palette="primary"
                onClick={onNextPage}
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
