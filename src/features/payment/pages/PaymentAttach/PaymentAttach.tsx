import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TitleAndDescriptionTextAttach } from "features/payment/components/TitleAndDescriptionTextAttach";
import { ButtonAttachDocuments } from "features/payment/components/ButtonAttachDocuments";
import { PaymentRoutes } from "features/payment/constants/routes";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, skipLabel } from "constants/buttons/labels";
import { AccountRoutes } from "features/account/constants/routes";
import { useHistory } from "react-router-dom";
import "_assets/css/forms/mainform.scss";
import media from "_assets/icons/media.svg";
import document from "_assets/icons/document.svg";

export const PaymentAttach: React.FC = () => {
  const history = useHistory();
  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };
  const onNextButtonClick = () => {
    history.push(PaymentRoutes.summary);
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
        <>
          <ProcessDescriptionHeader
            title="Pagamento"
            subtitle="Deseja anexar arquivos para identificar sua transferência?"
            description="Adicione um arquivo para identificar melhor essa transferência em seu histórico."
          />
        </>
      }
      main={
        <>
          <TitleAndDescriptionTextAttach
            title="Anexar:"
            description="Ex: boleto, conta de luz, entre outros."
          />
          <ButtonAttachDocuments title="Foto ou vídeo" imagePath={media} />
          <ButtonAttachDocuments title="Documento" imagePath={document} />
        </>
      }
      footer={
        <>
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onNextButtonClick}
              >
                {skipLabel}
              </Button>
            }
          />
        </>
      }
    />
  );
};
