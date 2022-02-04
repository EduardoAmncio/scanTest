import React from "react";
import { useStyles } from "./BlockCardAlert.style";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { CardRoutes } from "features/card/constants/routes";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import Alert from "_assets/img/AlertWarningImg.svg";
import { Typography, Box } from "@material-ui/core";
import { AccountRoutes } from "features/account/constants/routes";

export const BlockCardAlert: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const onCancelButtonClick = () => {
    history.replace(CardRoutes.cardOption);
  };

  const onNextButtonClick = () => {
    history.push(CardRoutes.address);
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
          <React.Fragment>
            <Box className={styles.description}>
              <ProcessDescriptionHeader title="Segunda via do cartão" />
            </Box>
            <Box className={styles.imageReference}>
              <Box className={styles.image}>
                <img src={Alert} alt="Alert" />
              </Box>
            </Box>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Typography className={styles.attention}>ATENÇÃO!</Typography>
            <Typography className={styles.cardtext}>
              <p>
                O cartão <strong>ELO - Final 4512</strong>
                <span className={styles.spanBreakLine}>
                  será <strong>cancelado</strong> definitivamente e um novo
                </span>{" "}
                cartão será enviado.
              </p>
            </Typography>
            <Typography className={styles.cardtext2}>
              <p>
                Essa ação não poderá ser desfeita,{" "}
                <strong>
                  certifique-se
                  <span className={styles.spanBreakLine}>
                    que deseja continuar.
                  </span>
                </strong>
              </p>
            </Typography>
          </React.Fragment>
        }
        footer={
          <React.Fragment>
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
          </React.Fragment>
        }
      />
    </PageContainer>
  );
};
