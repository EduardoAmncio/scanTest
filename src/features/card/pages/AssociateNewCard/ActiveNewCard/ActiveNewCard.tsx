import React from "react";
import {useStyles} from "./ActiveNewCard.style";
import {Box} from "@material-ui/core";
import {PageContainer} from "components/PageContainer";
import {ProcessPageLayout} from "components/ProcessPageLayout";
import {AppBar} from "components/AppBar";
import {ProcessDescriptionHeader} from "components/ProcessDescriptionHeader";
import {ProcessPageFooter} from "components/ProcessPageFooter";
import {Button} from "components/Button";
import {KeyboardArrowRight} from "@material-ui/icons";
import {InsertIdCard} from "features/card/components/Inputs/InsertIdCard"; 
import {ReadQrCodeButton} from "features/card/components/ReadQrCodeButton";
import {useHistory} from "react-router-dom";
import {CardRoutes} from "features/card/constants/routes";
import {AccountRoutes} from "features/account/constants/routes";

export const ActiveNewCard: React.FC = () => {
    
    const styles = useStyles();
    const history = useHistory();
    const onNextButtonClick = () => {
      history.push(CardRoutes.activeFourDigits);
  };
    return (
      <PageContainer>
          <ProcessPageLayout 
            appBar={<AppBar homeRoute={AccountRoutes.home}/>}
            header={
              <Box className={styles.headerWrapper}>
                <ProcessDescriptionHeader 
                  title={"Ativar novo cartão"}
                  subtitle={"Primeiro vamos associá-lo à sua conta"}
                  description={"Insira o código de identificação de 9 dígitos impresso em seu cartão"}
                />
              </Box>
            }
            main={
              <React.Fragment>
                <InsertIdCard />
                <ReadQrCodeButton />
              </React.Fragment>
            }
            footer={
                <ProcessPageFooter primaryButton={
                    <Button 
                      onClick={onNextButtonClick} 
                      endIcon={<KeyboardArrowRight color="secondary"/>} >
                      <span className={styles.nextButtonLabel}> Próximo </span>
                    </Button>
                  }
                />
            }        
          />  
      </PageContainer> 
    );
}