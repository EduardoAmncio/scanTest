import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Validator.style";
import valid from "_assets/icons/Exclude.svg";
import ellipse from "_assets/icons/Ellipse_24.svg";

interface ValidatorProps {
  description: string;
  isValid?: boolean | undefined;
  validation: Function;
  onValidate?: (value: boolean | undefined) => void;
  strictValidation?: boolean;
  value?: string;
}

export const Validator: React.FC<ValidatorProps> = ({
  description,
  isValid,
  validation,
  onValidate,
  strictValidation,
  value,
}) => {
  const styles = useStyles();

  React.useEffect(() => {
    const result = validation(value);
    onValidate!(result);
  }, [value]);

  const _getIcon = () => {
    return isValid ? valid : ellipse;
  };

  const _getClassName = () => {
    let className = `${styles.description} `;

    if (isValid) className += styles.valid;
    else if (strictValidation) className += styles.invalid;

    return className;
  };

  return (
    <Grid container alignItems="center" direction="row" spacing={1}>
      <Grid item>
        <img src={_getIcon()} alt={"icon"} />
      </Grid>
      <Grid item>
        <Typography className={_getClassName()}>{description}</Typography>
      </Grid>
    </Grid>
  );
};
