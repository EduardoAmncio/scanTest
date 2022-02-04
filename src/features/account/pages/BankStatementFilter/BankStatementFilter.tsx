import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { AccountRoutes } from "features/account/constants/routes";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { DateInput } from "components/DateInput";
import { Loader } from "components/Loader";
import { Alert } from "components/Alert";
import { Divider } from "components/Divider";
import { FilterSectionTitleAndDescription } from "features/account/components/FilterSectionTitleAndDescription";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon/ButtonWithFloatingIcon";
import { PageContainer } from "components/PageContainer";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { cancelLabel } from "constants/buttons/labels";
import { TransactionType } from "features/account/redux/models/transactionType";
import {
  closeAlert,
  setBankStatementFilters,
} from "features/account/redux/actions";
import { StoreState } from "redux/state";
import iconFilter from "_assets/icons/icn-filtro.svg";
import IconAlert from "_assets/icons/icon-alert.svg";
import { useStyles } from "./BankStatementFilter.style";
import { TagChip } from "features/tags/components/TagChip";

export const BankStatementFilter: React.FC = () => {
  const convertDate = (date: Date) => {
    if (date) {
      const dateString = date || new Date();
      const day = dateString.getDate().toString().padStart(2, "0");
      const month = (dateString.getMonth() + 1).toString().padStart(2, "0");
      const year = dateString.getFullYear();

      return `${month}/${day}/${year}`;
    }
    return undefined;
  };

  const { loading, bankStatementFilters, errorMessage } = useSelector(
    (state: StoreState) => state.account
  );

  const [startDate, setStartDate] = React.useState<
    MaterialUiPickersDate | string | undefined
  >(convertDate(bankStatementFilters?.startDate!));

  const [endDate, setEndDate] = React.useState<
    MaterialUiPickersDate | string | undefined
  >(convertDate(bankStatementFilters?.endDate!));

  const [transactionType, setTransactionType] = React.useState<
    TransactionType | undefined
  >(undefined);

  const [tags, setTags] = React.useState<string[]>([]);
  const [disableNextButton, setDisableNextButton] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const styles = useStyles();

  const onCancelButtonClick = () => {
    history.goBack();
  };

  const onResetDateChange = () => {
    const date = new Date();
    date?.setHours(0);
    date?.setMinutes(0);
    date?.setSeconds(0);
    date?.setMilliseconds(0);

    setStartDate(date);
    setEndDate(date);
  };

  const onStartDateChange = (date: MaterialUiPickersDate) => {
    if (date === undefined) date = new Date();

    setStartDate(date);
  };

  const onEndDateChange = (date: MaterialUiPickersDate) => {
    if (date === undefined) date = new Date();

    setEndDate(date);
  };

  const onTagClick = (tag: string) => {
    let newTags = [...tags];

    if (tags.includes(tag)) newTags = newTags.filter((x) => x !== tag);
    else newTags.push(tag);

    setTags(newTags);
  };

  const onApplyButtonClick = () => {
    dispatch(
      setBankStatementFilters({
        startDate: startDate ? new Date(startDate) : new Date(),
        endDate: endDate ? new Date(endDate) : new Date(),
        transactionType,
        tags,
      })
    );
    history.goBack();
  };

  React.useEffect(() => {
    const today = new Date();

    today?.setHours(0);
    today?.setMinutes(0);
    today?.setSeconds(0);
    today?.setMilliseconds(0);

    (startDate ?? today) > (endDate ?? today) ||
    startDate === null ||
    startDate?.toLocaleString().length! < 19 ||
    endDate === null ||
    endDate?.toLocaleString().length! < 19
      ? setDisableNextButton(true)
      : setDisableNextButton(false);
  }, [startDate, endDate]);

  return (
    <PageContainer>
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
          <ProcessDescriptionHeader
            title="Filtrar Extrato"
            description="Selecione as características das transações que deseja visualizar."
          />
        }
        main={
          <React.Fragment>
            <FilterSectionTitleAndDescription
              title="Por Data"
              description="Escolha o período que deseja visualizar"
            />
            <Grid
              container
              spacing={1}
              wrap="nowrap"
              className={styles.datesSection}
            >
              <Grid item>
                <Grid container wrap="nowrap" alignItems="center">
                  <Grid item>
                    <Typography variant="body2">de&nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <DateInput value={startDate} onChange={onStartDateChange} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container wrap="nowrap" alignItems="center">
                  <Grid item>
                    <Typography variant="body2">até&nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <DateInput value={endDate} onChange={onEndDateChange} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box>
              {disableNextButton && (
                <Grid
                  container
                  justifyContent="center"
                  className={styles.errorMessage}
                >
                  <Grid>
                    <img src={IconAlert} alt={``} />
                  </Grid>
                  <Grid>As datas estão inválidas</Grid>
                </Grid>
              )}
            </Box>
            <Box className={styles.clearButton}>
              <ButtonWithFloatingIcon
                onClick={() => {
                  onResetDateChange();
                }}
                size="small"
              >
                Limpar
              </ButtonWithFloatingIcon>
            </Box>
            <Divider spacing={2} />
            {/* <section>
              <FilterSectionTitleAndDescription
                title="Por Transação"
                description="Filtrar por gastos ou receitas"
              />
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant={
                      transactionType === TransactionType.sent
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    onClick={() =>
                      setTransactionType(
                        transactionType === TransactionType.sent
                          ? undefined
                          : TransactionType.sent
                      )
                    }
                  >
                    Enviados
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant={
                      transactionType === TransactionType.received
                        ? "contained"
                        : "outlined"
                    }
                    size="small"
                    onClick={() =>
                      setTransactionType(
                        transactionType === TransactionType.received
                          ? undefined
                          : TransactionType.received
                      )
                    }
                  >
                    Recebidos
                  </Button>
                </Grid>
              </Grid>
              <div className={styles.clearButton}>
                <ButtonWithFloatingIcon
                  icon={placeholderFloatingIcon}
                  size="small"
                  onClick={() => setTransactionType(undefined)}
                >
                  Limpar
                </ButtonWithFloatingIcon>
              </div>
            </section>
            <Divider spacing={2} /> */}
            <Box>
              <FilterSectionTitleAndDescription
                title="Por TAGs"
                description="As tags identificam suas transações, selecione
                            quais deseja visualizar"
              />
              <Box className={styles.customTagButtonsFilter}>
                <TagChip
                  label="Crédito"
                  selected={tags.includes("Crédito")}
                  onClick={() => onTagClick("Crédito")}
                />
                <TagChip
                  label="Débito"
                  selected={tags.includes("Débito")}
                  onClick={() => onTagClick("Débito")}
                />
                <TagChip
                  label="Manutenção"
                  selected={tags.includes("Manutenção")}
                  onClick={() => onTagClick("Manutenção")}
                />
                <TagChip
                  label="Escola"
                  selected={tags.includes("Escola")}
                  onClick={() => onTagClick("Escola")}
                />
              </Box>
            </Box>
            <Divider spacing={2} />
            <Box className={styles.applyButton}>
              <ButtonWithFloatingIcon
                icon={iconFilter}
                size="large"
                disabled={disableNextButton}
                onClick={onApplyButtonClick}
              >
                Aplicar Filtros
              </ButtonWithFloatingIcon>
            </Box>
          </React.Fragment>
        }
      />

      <Loader open={loading} />
      {errorMessage && (
        <Alert
          message={errorMessage}
          title="Erro"
          severity="error"
          onClose={() => dispatch(closeAlert())}
        />
      )}
    </PageContainer>
  );
};
