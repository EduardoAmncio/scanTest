import React from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useStyles } from "./SmsTransferSummary.style";
import { AppBar } from "components/AppBar";
import { DetailSmsTransferDescription } from "components/DetailSmsTransferDescription";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, concludeLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { SmsTransferRoutes } from "features/smsTransfer/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";

export const SmsTransferSummary: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {});

  const onConcludeButtonClick = () => {
    history.push(SmsTransferRoutes.completedSmsTransfer);
  };

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
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
            subtitle="Hora de conferir"
            description="Confira, cuidadosamente, os dados da transferência."
          />
        }
        main={
          <Grid
            container
            direction="column"
            justify="space-between"
            className={styles.contentValue}
          >
            <Grid item>
              <DetailSmsTransferDescription
                value={50}
                name={"Pedro Victor da Silva"}
                number={"85 99999.9999"}
                date={new Date(Date.now())}
              />
            </Grid>
          </Grid>
        }
        footer={
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
        }
      />
    </PageContainer>
  );
};
