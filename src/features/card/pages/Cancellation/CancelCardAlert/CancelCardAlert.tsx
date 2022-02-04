import React,{useState} from "react";
import {useStyles} from "./CancelCardAlert.style"
import {PageContainer} from "components/PageContainer";
import {useHistory} from "react-router-dom";
import {Close, KeyboardArrowRight} from "@material-ui/icons";
import {AppBar} from "components/AppBar";
import {Button} from "components/Button";
import {ProcessPageLayout} from "components/ProcessPageLayout";
import {ProcessDescriptionHeader} from "components/ProcessDescriptionHeader";
import {cancelLabel,nextLabel} from "constants/buttons/labels";
import {CardRoutes} from "features/card/constants/routes";
import {ProcessPageFooter} from "components/ProcessPageFooter";
import {PopUpConfirmPassword} from "features/card/components/PopUp/PopUpConfirmPassword";
import Alert from "_assets/img/AlertWarningImg.svg";
import {Typography,Box} from "@material-ui/core";
import {AccountRoutes} from "features/account/constants/routes";

export const CancelCardAlert: React.FC = () => {
    const styles = useStyles();
    const history = useHistory();
    const onCancelButtonClick = () => {
      history.replace(CardRoutes.cardOption);
    };
    const [onShowPopUp, setShowPopUp] = useState(false);
    const controlerPopUp = () =>{
      setShowPopUp(true);
    };
    const onClosePopUp = () =>{
      setShowPopUp(false);
    };
    const alertRedirect = () =>{
      history.push(CardRoutes.cardOption);
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
              <Box className={styles.desc}>
                  <ProcessDescriptionHeader
                    title="Cancelar cartão"
                  />
              </Box>
              <Box className={styles.imageReference}>
                  <Box className={styles.image} >
                      <img src={Alert} alt="Alert"/>
                  </Box>
              </Box>
          </React.Fragment>
        }
        main={
          <React.Fragment>
            <Typography className={styles.palavra}>
              ATENÇÃO!
            </Typography>
              <Box className={styles.textDataContent}>
                <p className={styles.textData}>O cartão <strong>ELO - Final 4512</strong> 
                <span className={styles.textSpanData}>será <strong>cancelado</strong> definitivamente</span></p>
              </Box>
              <Box className={styles.textAttempt}>
                <Typography className={styles.palavra2}>
                    Essa ação não poderá ser desfeita, <strong>certifique-se que deseja continuar.</strong>
                </Typography>
              </Box>
          </React.Fragment>
       }
       footer={
          <React.Fragment>
              <ProcessPageFooter
                primaryButton={
                  <Button
                    endIcon={<KeyboardArrowRight color="secondary" />}
                    onClick={controlerPopUp} 
                  >
                    {nextLabel}
                </Button>
                }
              />
            <PopUpConfirmPassword 
              open={onShowPopUp}
              onClose ={onClosePopUp}
              onClickAlert={alertRedirect}
              alertTitle="Cartão cancelado"
              />
          </React.Fragment>
        }
        />
        </PageContainer>
  );
};