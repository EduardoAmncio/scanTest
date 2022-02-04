import React from "react";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { SmsTransferRoutes } from "../../constants/routes";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { Button } from "components/Button";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { cancelLabel, nextLabel } from "constants/buttons/labels";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { PageContainer } from "components/PageContainer";
import { useHistory } from "react-router-dom";
import { TextField } from "components/TextField";
import { TagChip } from "features/tags/components/TagChip";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon/ButtonWithFloatingIcon";
import { TagEditPopUp } from "components/TagEditPopUp";
import { useStyles } from "./SmsTransferDescription.style";
import { Box } from "@material-ui/core";
import { AccountRoutes } from "features/account/constants/routes";

export const SmsTransferDescription: React.FC = () => {
  const [description, setDescription] = React.useState("");
  const [openTagEditPopUp, setOpenTagEditPopUp] = React.useState(false);

  const history = useHistory();
  const styles = useStyles();

  React.useEffect(() => {}, []);

  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value);

  const onEditTagsButtonClick = () => {
    setOpenTagEditPopUp(true);
  };

  const onEditTagsClose = () => {
    setOpenTagEditPopUp(false);
  };

  const onCancelButtonClick = () => {
    history.replace(AccountRoutes.home);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (openTagEditPopUp) {
      event.preventDefault();
      history.replace(SmsTransferRoutes.smsTransferDescription);
    } else history.push(SmsTransferRoutes.smsTransferAttachDocuments);
  };

  const onTagClick = (tag: string) => {};

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={SmsTransferRoutes.smsTransferNumber}
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
            subtitle="Deseja identificar sua transferência no extrato?"
            description="Adicione uma descrição, arquivo, foto ou mesmo um vídeo para identificar melhor essa transferência em seu histórico."
          />
        }
        main={
          <React.Fragment>
            <Box component="form" onSubmit={onSubmit}>
              <TextField
                label="Descreva em uma frase"
                placeholder="Escreva sua frase"
                value={description}
                onChange={onDescriptionChange}
              />
              <div className={styles.titleAndDescriptionFilter}>
                <ProcessDescriptionHeader
                  subtitle="Tags"
                  description="Insira marcações para identificar seus gastos. 
                             Use nossa sugestão ou personalize as tags."
                />
              </div>
              <div className={styles.tagsFilterStyle}>
                <TagChip
                  label="Crédito"
                  onClick={() => onTagClick("Crédito")}
                />
                <div className={styles.tagsFilterStyleChildren}>
                  <TagChip
                    label="Débito"
                    onClick={() => onTagClick("Débito")}
                  />
                </div>
                <div className={styles.tagsFilterStyleChildren}>
                  <TagChip
                    label="Escola"
                    onClick={() => onTagClick("Escola")}
                  />
                </div>
              </div>
              <div className={styles.buttonTagFloating}>
                <ButtonWithFloatingIcon onClick={onEditTagsButtonClick}>
                  Editar TAG
                </ButtonWithFloatingIcon>
              </div>
              {/* <TagEditPopUp open={openTagEditPopUp} onClose={onEditTagsClose} /> */}
            </Box>

            {}
          </React.Fragment>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onSubmit}
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
