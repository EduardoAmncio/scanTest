import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import Search from "_assets/icons/iconSearch.svg";
import { useStyles } from "./SearchField.styles";

interface SearchFieldProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  onChange,
}) => {
  const style = useStyles();

  return (
    <TextField
      className={style.search}
      variant="outlined"
      size="small"
      placeholder={placeholder}
      fullWidth
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={Search} alt="search icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};
