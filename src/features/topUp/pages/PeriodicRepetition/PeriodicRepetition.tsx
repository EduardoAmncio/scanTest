import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { PageContainer } from "components/PageContainer";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { TopUpRoutes } from "features/topUp/constants/routes";
import { useStyles } from "./PeriodicRepetition.style";
import { ListButtonRadio } from "features/topUp/components/ListButton/ListButtonRadio";
import { useDispatch } from "react-redux";

export const PeriodicRepetition: React.FC = () => {

  const style = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("");
  const dispatch = useDispatch();

  const onClickValue = (days: string) => {

  };

  return (
    <Box className={style.contentPage}>
      <PageContainer>
        <ProcessPageLayout
          header={
            <React.Fragment>
              <Typography variant="body1" className={style.description}>
                Repetir a recarga periodicamente
              </Typography>
            </React.Fragment>
          }
          main={
            <Box className={style.main}>
              <ListButtonRadio
                title="Repetir a cada 15 dias"
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                goToRoute={TopUpRoutes.topUpSchedule}
                onClick={() => onClickValue("15")}
              ></ListButtonRadio>
              <ListButtonRadio
                title="Repetir a cada 30 dias"
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                goToRoute={TopUpRoutes.topUpSchedule}
                onClick={() => onClickValue("30")}
              ></ListButtonRadio>
              <ListButtonRadio
                title="Repetir a cada 60 dias"
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                goToRoute={TopUpRoutes.topUpSchedule}
                onClick={() => onClickValue("60")}
              ></ListButtonRadio>
            </Box>
          }
          footer={<ProcessPageFooter />}
        />
      </PageContainer>
    </Box>
  );
};
