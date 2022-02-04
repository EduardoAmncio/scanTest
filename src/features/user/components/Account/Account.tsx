import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Account.style";

interface AccountProps {
  name: string;
  image: string;
}

export const Account: React.FC<AccountProps> = ({ name, image }) => {
  const styles = useStyles();

  return (
    <Grid
      container
      spacing={2}
      wrap="nowrap"
      alignItems="center"
      className={styles.account}
    >
      <Grid item className={styles.image}>
        <img src={image} alt="user" />
      </Grid>
      <Grid item className={styles.name}>
        <Typography>{name}</Typography>
      </Grid>
    </Grid>
  );
};
