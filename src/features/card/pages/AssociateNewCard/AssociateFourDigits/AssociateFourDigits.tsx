import React from "react";
import {useStyles} from "./AssociateFourDigits.style";
import {PageContainer} from "components/PageContainer";
import {ProcessPageLayout} from "components/ProcessPageLayout";
import {AppBar} from "components/AppBar";
import {CardRoutes} from "features/card/constants/routes";
import {Button} from "components/Button";
import {useHistory} from "react-router-dom";
import {Close, KeyboardArrowRight} from "@material-ui/icons";
import {cancelLabel, nextLabel} from "constants/buttons/labels";
import {ProcessDescriptionHeader} from "components/ProcessDescriptionHeader";
import {Box,Typography} from "@material-ui/core";
import {ProcessPageFooter} from "components/ProcessPageFooter";
import {LastDigitsInput} from "features/card/components/Inputs/LastDigitsInput";
import {AccountRoutes} from "features/account/constants/routes";

export const AssociateFourDigits: React.FC = () =>{
  const [passwordInput, setPasswordInput] = React.useState("")
  const history = useHistory();
  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardManagement);
  };
  const onNextButtonClick = () => {
    history.push(CardRoutes.associateNewCardCheck);
  };
  const styles = useStyles();
    return(
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
              <Box className={styles.descriptionstyle}>
                <ProcessDescriptionHeader
                  title="Associar novo cartão"
                  subtitle="Quase lá! Precisamos confirmar os dados do cartão"
                  description="Insira os 4 últimos digitos do número do seu cartão"
                />
              </Box>
          }
          main={
            <Box className={styles.mainboxcontent}>
              <Box className={styles.mainboxchildren}>
                <Typography className={styles.labelstyle}>
                    <label>4 últimos dígitos do cartão</label>                   
                </Typography>
                <LastDigitsInput
                  value={passwordInput}
                />
              </Box>
            </Box>
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
    )
}