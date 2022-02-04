import React from "react";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ListButtonRadio } from "features/card/components/ListButton/ListButtonRadio";
import { useStyles } from "./BlockingReason.style";
import { AccountRoutes } from "features/account/constants/routes";
import { CardRoutes } from "features/card/constants/routes";

export const BlockingReason: React.FC = () => {
  const history = useHistory();
  const styles = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("");

  const onCancelButtonClick = () => {
    history.push(CardRoutes.cardOption);
  };
  const onNextButtonClick = () => {
    history.push(CardRoutes.reissueWarning);
  };

  return (
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
        <Box className={styles.description}>
          <ProcessDescriptionHeader
            title="Segunda via do cartão"
            subtitle="Qual o motivo do bloqueio do cartão?"
            description="ATENÇÃO! Seu cartão atual será cancelado e um novo será enviado. Essa ação não pode ser desfeita."
          />
        </Box>
      }
      main={
        <Box className={styles.listOptions}>
          <ListButtonRadio
            title="Roubo"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          ></ListButtonRadio>
          <ListButtonRadio
            title="Perca"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          ></ListButtonRadio>
          <ListButtonRadio
            title="Suspeita de fraude"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          ></ListButtonRadio>
          <ListButtonRadio
            title="Cartão danificado"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          ></ListButtonRadio>
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
  );
};
