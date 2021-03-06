import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyle } from "./PopUpTempBlock.style";
import { Button } from "components/Button";
import { Close } from "@material-ui/icons";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import confirmIcon from "_assets/icons/Confirm.svg";
import { Drawer, Grid } from "@material-ui/core";
import { Alert } from "components/Alert";
import { PageContainer } from "components/PageContainer";
import { Loader } from "components/Loader";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { Card } from "features/card/redux/models/card";
import { block, unblock, updateCard } from "features/card/redux/actions";
interface PopUpBlockPropsState {
  loading: boolean;
  message?: string;
  success?: boolean;
  switchisBlocked?: boolean;
}

interface PopUpBlockProps {
  open: boolean;
  panLastDigits?: number;
  indentfier?: number;
  isBlocked?: boolean;
  flagName: string;
  onClose: (args?: boolean) => void;
}

export const PopUpTempBlock: React.FC<PopUpBlockProps> = ({
  open,
  onClose,
  isBlocked,
  flagName,
  panLastDigits,
}) => {
  const [{ loading, success, message }, setState] =
    React.useState<PopUpBlockPropsState>({
      loading: false,
    });

  const [cards] = useSelector<StoreState, [Card | undefined]>((state) => [
    state.card.card,
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [displayCards, setDisplayCards] = React.useState(cards);
  const [disableConcludeButton, setDisableConcludeButton] =
    React.useState(true);

  const styles = useStyle();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(updateCard(cards));
  }, [cards?.isBlocked]);

  React.useEffect(() => {
    setDisplayCards(cards);
  }, [cards]);

  React.useEffect(() => {
    if (inputValue.length < 4) setDisableConcludeButton(true);
    else setDisableConcludeButton(false);
  }, [inputValue.length]);

  const onCloseButtonClick = () => {
    dispatch(updateCard(cards));
    onClose();
  };

  const handlePassword = (value: string) => {
    setInputValue(value);
  };

  const onConfirmButtonClick = () => {
    if (displayCards?.isBlocked === false) {
      dispatch(block(displayCards!.identifierCard, inputValue));
    } else {
      dispatch(unblock(displayCards!.identifierCard, inputValue));
    }
    dispatch(updateCard({ ...cards!, isBlocked: !isBlocked }));
    onClose(!isBlocked);
  };

  const blockrUnBlockDescription = !displayCards?.isBlocked ? (
    <Grid item>
      <Typography className={styles.textBlock}>
        Deseja realmente bloquear
        <br /> temporariamente seu cart??o?
      </Typography>
      <Typography className={styles.subtextBlock}>
        Seu cart??o de cr??dito pr??-pago{": "}
        <strong>
          {flagName} final {panLastDigits}
        </strong>
        , n??o poder?? ser usado at?? que voc?? reative.
      </Typography>
      <Typography className={styles.text}>Digite sua senha</Typography>
    </Grid>
  ) : (
    <Grid item>
      <Typography className={styles.textBlock}>
        Deseja realmente desbloquear seu cart??o?
      </Typography>
      <Typography className={styles.subtextBlock}>
        Seu cart??o de cr??dito pr??-pago{": "}
        <strong>
          {flagName} final {panLastDigits}
        </strong>
        , poder?? ser usado normalmente.
      </Typography>
      <Typography className={styles.text}>Digite sua senha</Typography>
    </Grid>
  );

  return (
    <React.Fragment>
      <Drawer
        className={styles.drawer}
        anchor="bottom"
        open={open}
        onClose={() => onClose(displayCards?.isBlocked ?? false)}
      >
        <PageContainer>
          <Box className={styles.content}>
            <Box className={styles.closeButton}>
              <Button
                size="small"
                palette="secondary"
                onClick={onCloseButtonClick}
                startIcon={<Close color="primary" />}
              >
                Fechar
              </Button>
            </Box>
            <Grid container direction="column" spacing={4}>
              <Grid item>
                <Box>{blockrUnBlockDescription}</Box>
              </Grid>
              <Grid item>
                <Box className={styles.inputRow}>
                  <OtpInput
                    className="input"
                    numInputs={4}
                    onChange={(valueInput: string) =>
                      handlePassword(valueInput)
                    }
                    value={inputValue}
                    isInputSecure={true}
                    isInputNum
                  />
                </Box>
              </Grid>
              <Grid item>
                <Box className={styles.confirm}>
                  <ButtonWithFloatingIcon
                    icon={confirmIcon}
                    disabled={disableConcludeButton}
                    onClick={onConfirmButtonClick}
                  >
                    Confirmar
                  </ButtonWithFloatingIcon>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </PageContainer>
      </Drawer>
      <Loader open={loading} />
      {message && (
        <Alert
          title={success ? "Sucesso" : "Erro"}
          message={message}
          severity={success ? "success" : "error"}
        />
      )}
    </React.Fragment>
  );
};
