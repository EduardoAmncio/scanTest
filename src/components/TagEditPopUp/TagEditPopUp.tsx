import React from "react";
import { Box, Drawer, Grid } from "@material-ui/core";
import { useStyle } from "./TagEditPopUp.style";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TextField } from "components/TextField";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon/ButtonWithFloatingIcon";
import { Button } from "components/Button";
import { finishLabel } from "constants/buttons/labels";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "redux/state";
import { TagChip } from "features/tags/components/TagChip";
import Alert from "@material-ui/lab/Alert";
import { getTags } from "features/tags/redux/actions";

interface TagEditPopUpProps {
  open: boolean;
  onClose: Function | ((setOpen: boolean) => void);
  onSaveTags: (tags: string[]) => void;
}

export const TagEditPopUp: React.FC<TagEditPopUpProps> = ({
  open,
  onSaveTags,
  onClose,
}) => {
  const style = useStyle();
  const dispatch = useDispatch();
  const [descriptionTags, setDescriptionTags] = React.useState("");
  const sugestTags = useSelector((state: StoreState) => state.tags.tags);
  const [tags, setTags] = React.useState(sugestTags);
  const [errorMessageTags, setErrorMessageTags] = React.useState(false);

  React.useEffect(() => {
    dispatch(getTags());
  }, []);

  React.useEffect(() => {
    setTags(sugestTags);
  }, [sugestTags]);

  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionTags(event.target.value);
  };

  const onAddTagsButtonClick = () => {
    if (typeof tags === "undefined" && descriptionTags.length >= 2) {
      setTags([descriptionTags]);
    } else if (typeof tags === "undefined" && descriptionTags.length < 2) {
      setErrorMessageTags(true);
    } else if (
      !tags?.includes(descriptionTags) &&
      descriptionTags.length >= 2
    ) {
      setTags([...(tags ?? []), descriptionTags]);
      setErrorMessageTags(false);
    } else if (descriptionTags.length < 2) {
      setErrorMessageTags(true);
    } else {
      setErrorMessageTags(false);
    }
    setDescriptionTags("");
  };

  const onTagsRemoveClick = (tagToDelete: string) => {
    setTags(tags?.filter((tag: string) => tag !== tagToDelete));
  };

  const onPushTags = () => {
    onClose(!open);
  };

  const onCloseTagsEditPopUp = () => {
    onClose(!open);
    onSaveTags(tags ?? []);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="bottom"
        elevation={0}
        open={open}
        onClose={() => onCloseTagsEditPopUp()}
      >
        <Grid className={style.tagEditHeader}>
          <ProcessDescriptionHeader
            title=""
            subtitle="Editar Tags"
            description="Exclua ou adicione as tags para identificar
                      melhor sua transa????o em seu extrato"
          />
        </Grid>
        <Grid className={style.tagsEditBody}>
          <Box component="form">
            <ProcessDescriptionHeader
              subtitle="TAGs adicionadas"
              description="Toque no (x) para excluir uma TAG"
            />
            <Box className={style.scrollTags}>
              {tags &&
                tags.map((tagValue: string | undefined, index: number) => {
                  return (
                    <text key={index} className={style.tagsButtonStyle}>
                      <TagChip
                        label={tagValue!}
                        onClick={() => onTagsRemoveClick(tagValue!)}
                      />
                    </text>
                  );
                })}
            </Box>
            <Box className={style.elementsFormTags}>
              <Box>
                <TextField
                  label="Insira TAG"
                  placeholder="Escreva sua frase"
                  value={descriptionTags.toUpperCase()}
                  onChange={onDescriptionChange}
                />
              </Box>
              {errorMessageTags && (
                <Alert severity="warning">
                  As tags devem conter 2 ou mais caracteres!
                </Alert>
              )}
              <Box className={style.addTagButtonStyle}>
                <ButtonWithFloatingIcon onClick={onAddTagsButtonClick}>
                  adicionar
                </ButtonWithFloatingIcon>
              </Box>
              <Box className={style.finishTagButtonStyle}>
                <Button size={"large"} onClick={onCloseTagsEditPopUp}>
                  {finishLabel}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};
