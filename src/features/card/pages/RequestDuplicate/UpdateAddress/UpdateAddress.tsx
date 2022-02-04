import React from "react";
import {Box,Grid,Typography} from "@material-ui/core";
import {AppBar} from "components/AppBar";
import {useHistory} from "react-router-dom";
import {ProcessDescriptionHeader} from "components/ProcessDescriptionHeader";
import {Button} from "components/Button";
import {Close,KeyboardArrowRight} from "@material-ui/icons";
import {cancelLabel,nextLabel} from "constants/buttons/labels";
import Address from "_assets/img/AddressImg.svg";
import {ProcessPageFooter} from "components/ProcessPageFooter";
import {PageContainer} from "components/PageContainer";
import {ProcessPageLayout} from "components/ProcessPageLayout";
import {useStyles} from "./UpdateAddress.style"
import {CardRoutes} from "features/card/constants/routes";
import {AccountRoutes} from "features/account/constants/routes";

export const UpdateAddress: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardOption);
  };
  const onNextButtonClick = () => {
    history.push("/");
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
          <Box className={styles.card}>
            <ProcessDescriptionHeader
              title="Segunda via do cartão"
              subtitle="Endereço"
              description=""
            />
          </Box>
        }
        main={
          <Box className="content">
            <Box className="align-top">
              <Grid item>
                <Box className={styles.contentimg}>
                  <img
                    src={Address}
                    alt="update address"
                    className={styles.img}
                  />
                </Box>
              </Grid>
              <Box className={styles.contentTexts}>
                <Typography className={styles.txtaddress}> Atualize seu endereço</Typography>
              </Box>
            </Box>
            <Box>
              <Box className={styles.textmid}>
                <Typography variant="caption" className={styles.box}>
                  Você precisa atualizar seu endereço antes de
                  solicitar a segunda via do seu cartão!
                </Typography>
              </Box>
              <Box className={styles.textmid} >
                <Typography variant="caption" className={styles.box}>
                  Após a atualização, inicie a solicitação
                  novamente.
                </Typography>
              </Box>
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