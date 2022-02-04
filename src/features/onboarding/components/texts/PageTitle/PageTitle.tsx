import { Typography } from "@material-ui/core";
import React from "react";

interface TextProps {
  text: string;
}

export const PageTitle = ({ text }: TextProps) => {
  return (
    <Typography variant="h6" align="center">
      <strong>{text}</strong>
    </Typography>
  );
};
