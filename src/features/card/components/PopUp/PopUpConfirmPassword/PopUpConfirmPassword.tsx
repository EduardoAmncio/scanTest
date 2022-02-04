import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Box, Drawer, Grid, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Button } from "components/Button";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { PageContainer } from "components/PageContainer";
import { useStyles } from "./PopUpConfirmPassword.style";
import confirmIcon from "_assets/icons/Confirm.svg";
import { AlertConcluded } from "components/AlertConcluded";

interface PopUpProps {
  open: boolean;
  onClose?: (args?: boolean) => void;
  onClickAlert?: React.MouseEventHandler<HTMLElement>;
  alertTitle: string;
}

export const PopUpConfirmPassword: React.FC<PopUpProps> = ({
  open,
  onClose = () => { },
  onClickAlert,
  alertTitle
}) => {

  const [inputValue, setInputValue] = React.useState('')
  const styles = useStyles();
  const handlePassword = (value: string) => {
    const reg = /[0-9]/g;
    value = value.replaceAll(reg, '●')
    setInputValue(value);
  }
  const closePopUp = () => {
    onClose();
  };
  const [onShowAlert, setShowAlert] = useState(false);
  const controlerAlert = () => {
    setShowAlert(true);
  };

  const onCloseAlert = () => {
    setShowAlert(false);
  };
  return (
    <React.Fragment>
      <Drawer
        className={styles.drawer}
        anchor="bottom"
        elevation={0}
        open={open}
        onClose={() => onClose(true)}
      >
        <PageContainer>
          <Box className={styles.content}>
            <Box className={styles.closeButton}>
              <Button
                size="small"
                palette="secondary"
                onClick={closePopUp}
                startIcon={<Close color="primary" />}
              >
                Fechar
              </Button>
            </Box>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Typography className={styles.text}>
                  Digite sua senha
                </Typography>
              </Grid>
              <Grid item className={styles.inputRow}>
                <OtpInput
                  numInputs={4}
                  separator={''}
                  onChange={(valueInput: string) => handlePassword(valueInput)}
                  value={inputValue}
                  className="teste"
                  isInputNum
                />
              </Grid>
              <Grid item>
                <Box className={styles.confirm}>
                  <ButtonWithFloatingIcon
                    icon={confirmIcon}
                    onClick={controlerAlert}
                  >
                    Confirmar
                  </ButtonWithFloatingIcon>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <AlertConcluded
            open={onShowAlert}
            onClose={onCloseAlert}
            onClick={onClickAlert}
            title={alertTitle}
          />
        </PageContainer>
      </Drawer>
    </React.Fragment>
  );
};