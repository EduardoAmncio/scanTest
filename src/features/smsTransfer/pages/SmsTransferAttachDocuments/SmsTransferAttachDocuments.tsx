import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { AccountRoutes } from "features/account/constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ButtonAttachDocuments } from "../../components/ButtonAttachDocuments";

import Media from "_assets/icons/media.svg";
import Document from "_assets/icons/document.svg";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { SmsTransferRoutes } from "features/smsTransfer/constants/routes";

export const SmsTransferAttachDocuments: React.FC = () => {
  const history = useHistory();

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onNextButtonClick = () => {
    history.push(SmsTransferRoutes.smsTransferSummary);
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
            title="Transferência pelo celular"
            subtitle="Deseja anexar arquivos para identificar sua transferência?"
            description="Adicione um arquivo para identicar melhor essa transferência em seu histórico. Você pode pular essa etapa."
          />
        }
        main={
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body2">
                <strong>Anexar:</strong>
              </Typography>
              <Typography variant="body2">
                Ex: boleto, conta de luz, entre outros
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <ButtonAttachDocuments
                    title="Foto ou vídeo"
                    imagePath={Media}
                  />
                </Grid>
                <Grid item>
                  <ButtonAttachDocuments
                    title="Documento"
                    imagePath={Document}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
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
