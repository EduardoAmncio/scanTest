import React from "react";
import Button from "@material-ui/core/Button";
import "./LoginButton.scss";

export const LoginButton = () => {

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      size="large"
      disableElevation
      className= "loginButton"
      type="submit"
    >
      Entrar
    </Button>
  );
};
