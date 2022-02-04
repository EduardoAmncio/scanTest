import React from "react";

import { BadgeChangeProfileButton } from "features/account/components/BadgeChangeProfileButton";
import { EditPageHeader } from "features/account/components/EditPageHeader";
import { Container, TextField } from "@material-ui/core";
import { useStyle } from "_assets/makeStyles/container/container.style";
import { BadgeButton } from "components/BadgeButton";

import ButtonBg from "_assets/icons/buttonBg.svg";
import image from "_assets/img/imageUserMasMax.svg";
import imageSaveButton from "_assets/icons/Confirm.svg";

import { useStyles } from "./EditAccount.style";
import "_assets/css/forms/mainform.scss";

export const EditAccount: React.FC = () => {
  const styles = useStyles();
  const style = useStyle();

  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="main-form">
        <div className="form-body">
          <EditPageHeader />
          <div className={styles.contentEdit}>
            <img className={styles.imageUser} src={image} alt="imageUser" />
          </div>
          <div className={styles.contentEdit}>
            <BadgeChangeProfileButton
              title="Alterar Foto"
              imagePath={ButtonBg}
            />
          </div>
          <div className={styles.alingInputEditNickname}>
            <TextField
              label="Editar apelido da conta"
              value="Pedro Victor Nascimento Oliveira"
            />
          </div>
          <div className={styles.formFooterEdit}>
            <BadgeButton
              title="Salvar"
              imagePath={imageSaveButton}
              redirectRoute=" "
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
