import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { useHistory } from "react-router-dom";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import {
  cancelLabel,
  nextLabel,
  skipLabel,
  returnLabel,
} from "constants/buttons/labels";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { Close, KeyboardArrowRight } from "@material-ui/icons";
import { Box, Grid } from "@material-ui/core";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TextField } from "components/TextField";
import { useStyles } from "./PaymentEmptyDescription.style";
import { updatePaymentData } from "features/payment/redux/actions";
import { useDispatch } from "react-redux";
import { PaymentRoutes } from "features/payment/constants/routes";
import { AccountRoutes } from "features/account/constants/routes";
import { PageContainer } from "components/PageContainer";
import { KeyboardArrowLeft } from "@material-ui/icons";
import { Loader } from "components/Loader";
import { TagChip } from "features/tags/components/TagChip";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { TagEditPopUp } from "components/TagEditPopUp";

export const PaymentEmptyDescription: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [openTagEditPopUp, setOpenTagEditPopUp] = React.useState(false);
  const [inputText, setInputText] = React.useState("");

  const [originalPaymentValue, payementTags] = useSelector<
    StoreState,
    [number, string[] | undefined]
  >((state) => [
    state.payment.paymentData?.originalPaymentValue!,
    state.payment.paymentData?.tags,
  ]);
  const loading = useSelector((state: StoreState) => state.tags.loading);

  const onCancelButtonClick = () => {
    dispatch(updatePaymentData());
    history.replace(AccountRoutes.home);
  };

  const onSkipLabelButtonClick = async (description: string) => {
    dispatch(updatePaymentData({ description: description }));
    history.push(PaymentRoutes.summary);
  };

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  const onBackButtonClick = () => {
    dispatch(updatePaymentData({ paymentValue: originalPaymentValue }));
  };

  const onEditTagsButtonClick = () => {
    setOpenTagEditPopUp(true);
  };

  const onEditTagsClose = () => {
    setOpenTagEditPopUp(false);
  };

  return (
    <PageContainer>
      <ProcessPageLayout
        appBar={
          <AppBar
            homeRoute={"/"}
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
            title="Pagamentos"
            subtitle="Deseja identificar seu pagamento no extrato?"
            description="Adicione uma descrição, arquivo, foto ou mesmo um vídeo para identificar melhor essa transação em seu histórico."
          />
        }
        main={
          <Box className={styles.customBody}>
            <Box className={styles.customInput}>
              <TextField
                label="Descreva em uma frase"
                placeholder="Escreva sua frase"
                value={inputText}
                onChange={handleChange}
              />
            </Box>
            <Box className={styles.titleAndDescriptionFilter}>
              <ProcessDescriptionHeader
                subtitle="Tags"
                description="Caso queira, insira marcações para identificar seus gastos."
              />
            </Box>

            <Box marginTop={1}>
              <Grid container spacing={1}>
                {payementTags?.map((tags) => (
                  <Grid item>
                    <TagChip label={tags} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box className={styles.buttonTagFloating}>
              <ButtonWithFloatingIcon onClick={onEditTagsButtonClick}>
                Editar TAG
              </ButtonWithFloatingIcon>
            </Box>
            <TagEditPopUp
              onSaveTags={(tags) => dispatch(updatePaymentData({ tags }))}
              open={openTagEditPopUp}
              onClose={onEditTagsClose}
            />
          </Box>
        }
        footer={
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={() => onSkipLabelButtonClick(inputText)}
              >
                {!inputText && !payementTags ? skipLabel : nextLabel}
              </Button>
            }
            onBackButtonClick={onBackButtonClick}
          />
        }
      />
      <Loader open={loading} />
    </PageContainer>
  );
};
