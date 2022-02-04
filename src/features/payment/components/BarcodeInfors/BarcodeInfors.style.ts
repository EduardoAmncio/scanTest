import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: "absolute",
    minHeight: '100vh',
    minWidth: '100vw',
    zIndex:1,
    overflow: "hidden",
  }
});