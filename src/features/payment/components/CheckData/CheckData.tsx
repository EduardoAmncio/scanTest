import { Grid } from "@material-ui/core";
import { useStyles } from "./CheckData.style";

interface CheckDataProps {
  description: string | undefined;
  receiver: string | undefined;
  value: number | undefined;
}

export const CheckData = ({ receiver, value, description }: CheckDataProps) => {
  const styles = useStyles();

  return (
    <Grid item>
      <Grid item className={styles.checkOut}>
        {description}
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item className={styles.receiver}>
          {receiver}
        </Grid>
        <Grid item className={styles.value}>
          R$&nbsp;{value}
        </Grid>
      </Grid>
    </Grid>
  );
};
