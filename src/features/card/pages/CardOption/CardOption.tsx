import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { CardData } from "features/card/components/CardData";
import { useStyles } from "./CardOption.style";
import { Button } from "components/Button";
import { ListButtonSwitch } from "features/card/components/ListButton/ListButtonSwitch";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { PopUpTempBlock } from "features/card/components/PopUp/PopUpTempBlock";
import { AccountRoutes } from "features/account/constants/routes";
import { useHistory } from "react-router-dom";
import { CardRoutes } from "features/card/constants/routes";
import { useSelector } from "react-redux";
import { SwitchIOS } from "components/SwitchIOS";
import { StoreState } from "redux/state";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { Card } from "features/card/redux/models/card";
import iconElo from "_assets/img/EloImage.svg";
import iconMasterCard from "_assets/img/MastercardImage.svg";
import iconVisa from "_assets/img/VisaImage.svg";

export const CardOption: React.FC = () => {
  const [card] = useSelector<StoreState, [Card | undefined]>((state) => [
    state.card.card,
  ]);
  const [openCardPopup, setOpenCardPopup] = React.useState(Boolean);
  const [displayCard, setDisplayCard] = React.useState(card);
  const [isBlocked, setIsBlocked] = useState(card?.isBlocked ?? false);
  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {
    setDisplayCard(card);
    setIsBlocked(card?.isBlocked ?? false);
  }, [card]);

  const imageFlagCard = (flag: string) => {
    switch (flag) {
      case "ELO":
        return iconElo;

      case "VISA":
        return iconVisa;

      case "MasterCard":
        return iconMasterCard;
    }
  };

  const onChangePasswordClick = () =>
    history.push(CardRoutes.enterCurrentPassword);

  const onBackClick = () => history.push(CardRoutes.cardManagement);

  const onCardPopupClose = (isBlocked?: boolean) => {
    setOpenCardPopup(false);
    setIsBlocked(isBlocked ?? false);
  };

  const onActiveButtonState = () => {
    setOpenCardPopup(true);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <Box>
            <CardData
              fullName={displayCard?.fullName}
              panLastDigits={displayCard?.panLastDigits}
              flagCard={imageFlagCard("ELO")}
            />
          </Box>
        }
        main={
          <React.Fragment>
            <Box className={styles.descriptionBoxText}>
              <Typography className={styles.description}>
                Seu cartão é aceito somente em estabelecimentos físicos na
                função <strong>CRÉDITO</strong>. Até o limite do saldo
                disponível em sua conta.
              </Typography>
            </Box>
            <Box className={styles.listButtons}>
              <ListButtonSwitch
                title="Bloqueio temporário"
                onClick={onActiveButtonState}
                right={<SwitchIOS checked={displayCard?.isBlocked ?? false} />}
              />
              <ListButtonSwitch
                title="Alterar Senha"
                onClick={onChangePasswordClick}
              />
            </Box>
          </React.Fragment>
        }
        footer={
          <Box>
            <PopUpTempBlock
              open={openCardPopup}
              onClose={onCardPopupClose}
              panLastDigits={displayCard?.panLastDigits}
              indentfier={displayCard?.identifierCard}
              isBlocked={displayCard?.isBlocked}
              flagName="ELO"
            />
            <ProcessPageFooter
              secondaryButton={
                <Button
                  palette="secondary"
                  startIcon={<KeyboardArrowLeft color="secondary" />}
                  onClick={onBackClick}
                >
                  Voltar
                </Button>
              }
            />
          </Box>
        }
      />
    </PageContainer>
  );
};
