import { Snackbar } from "@material-ui/core";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import React from "react";

interface AlertProps {
  title: string;
  message: string | undefined;
  autoHideDuration?: number;
  severity?: "success" | "info" | "warning" | "error";
  onClose?: VoidFunction;
}

export const Alert = ({ title, message, severity, onClose, autoHideDuration = 3000 }: AlertProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(message !== undefined);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={autoHideDuration}
      onClose={() => {
        setIsOpen(false);
        onClose?.call(this);
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
