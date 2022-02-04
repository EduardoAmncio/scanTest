import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AuthenticationRoutes } from "features/authentication/constants/routes";

interface ConfirmSignoutDialogProps {
  open: boolean;
  onClose: VoidFunction;
}

export const ConfirmSignoutDialog: React.FC<ConfirmSignoutDialogProps> = ({
  open,
  onClose,
}) => {
  const history = useHistory();

  const onYesButtonClick = () => {
    history.replace(AuthenticationRoutes.signOut);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Sair</DialogTitle>
      <DialogContent>
        <DialogContentText>Deseja realmente sair?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Não</Button>
        <Button onClick={onYesButtonClick}>Sim</Button>
      </DialogActions>
    </Dialog>
  );
};
