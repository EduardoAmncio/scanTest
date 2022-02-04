import { Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./Authentication.style";

interface AuthenticationProps {
  controlProtocol?: string;
  internalProtocol?: string;
}

export const Authentication: React.FC<AuthenticationProps> = ({
  controlProtocol,
  internalProtocol,
}) => {
  const style = useStyle();
  return (
    <div className={style.autenticationContent}>
      <Typography variant="subtitle2">Autenticação</Typography>
      <Typography variant="body2">Pago Via:</Typography>
      <Typography variant="body2">
        <strong>Open Source Bank</strong>
      </Typography>
      <Typography variant="subtitle2">Controle/Protocolo:</Typography>
      <Typography variant="body2" className={style.wordBreak}>
        {controlProtocol}
      </Typography>
      <Typography variant="subtitle2">Protocolo Interno:</Typography>
      <Typography variant="body2" className={style.wordBreak}>
        {internalProtocol ?? "---"}
      </Typography>
    </div>
  );
};
