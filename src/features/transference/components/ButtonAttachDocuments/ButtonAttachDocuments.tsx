import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./ButtonAttachDocuments.style";


interface ButtonAttachDocumentsProps {
  title: string;
  imagePath: string;
}

export const ButtonAttachDocuments: React.FC<ButtonAttachDocumentsProps> = ({ title, imagePath}) => {
  
  const styleButtonAttachDocuments = useStyles();

  return (
    <Button
      component="label"
      className={styleButtonAttachDocuments.ButtonAttachDocuments}
    >
      <input
        type="file"
        hidden
        id="raised-button-file"
      />
      <label htmlFor="raised-button-file" className={styleButtonAttachDocuments.contentAttachDocuments}>

        <img src={imagePath} className={styleButtonAttachDocuments.iconAttachDocuments} alt="bgButton" />

        <div className={styleButtonAttachDocuments.labelAttachDocuments}>  {title}  </div>

      </label>


    </Button>
  );
};