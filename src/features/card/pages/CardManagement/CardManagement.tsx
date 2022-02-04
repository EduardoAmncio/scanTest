import React from "react";
import { Box } from "@material-ui/core";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { useStyles } from "./CardManagement.style";
import { SelectCardButton } from "features/card/components/SelectCardButton";
import iconElo from "_assets/img/EloImage.svg";
import iconMasterCard from "_assets/img/MastercardImage.svg";
import iconVisa from "_assets/img/VisaImage.svg";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import iconAssociate from "_assets/icons/IconAssociateCard.svg";
import { AccountRoutes } from "features/account/constants/routes";
import { CardRoutes } from "features/card/constants/routes";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "features/card/redux/models/card";
import { StoreState } from "redux/state";
import { findCardList, selectCard } from "features/card/redux/actions";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Button } from "components/Button";

export const CardManagement: React.FC = () => {
  const [cards, loading, errorMessage] = useSelector<
    StoreState,
    [Card[] | undefined, boolean, string | undefined]
  >((state) => [state.card.cards, state.card.loading, state.card.errorMessage]);
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [displayCards, setDisplayCards] = React.useState(cards);

  const onAssociateButton = () => history.push(CardRoutes.activeNewCard);

  const onSettings = () => history.push(AccountRoutes.settings);

  const onNextPageCard = (card: Card) => {
    dispatch(selectCard(card));
    history.push(CardRoutes.cardOption);
  };

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

  React.useEffect(() => {
    dispatch(findCardList());
  }, []);

  React.useEffect(() => {
    setDisplayCards(cards);
  }, [cards]);

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={<AppBar homeRoute={AccountRoutes.home} />}
        header={
          <ProcessDescriptionHeader
            title="Gerenciamento de Cartões"
            subtitle="Aqui estão os cartões associados à sua conta"
            description="Selecione o cartão que deseja gerenciar"
          />
        }
        main={
          <Box display="flex" flexDirection="column">
            <Box>
              {displayCards?.map((cards) => (
                <SelectCardButton
                  key={cards.identifierCard}
                  card={cards}
                  flagtype="ELO"
                  flagCard={imageFlagCard("ELO")}
                  onClick={() => onNextPageCard(cards)}
                />
              ))}
            </Box>

            {/* <Box className={styles.associateCard}>
              <ButtonWithFloatingIcon
                icon={iconAssociate}
                onClick={onAssociateButton}
              >
                Associar cartão
              </ButtonWithFloatingIcon>
            </Box> */}
          </Box>
        }
        footer={
          <ProcessPageFooter
            secondaryButton={
              <Button
                palette="secondary"
                startIcon={<KeyboardArrowLeft color="secondary" />}
                onClick={onSettings}
              >
                Voltar
              </Button>
            }
          />
        }
      />
      <Loader open={loading} />
      {errorMessage && (
        <Alert title="Erro" message={errorMessage} severity="error" />
      )}
    </PageContainer>
  );
};
