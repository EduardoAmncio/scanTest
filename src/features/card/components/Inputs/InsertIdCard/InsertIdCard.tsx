import React from "react";
import { useStyles, CardIdInput } from "./InsertIdCard.style";
import { FormControl, InputLabel } from "@material-ui/core";

export const InsertIdCard: React.FC = () => {
    const [valueIdCard, setValueIdCard] = React.useState('');
    const handleValueIdCard = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const lengthInputValue = event.currentTarget.value.length
        if (lengthInputValue > 9) {
            return
        }
        const numberFilter = /^[0-9\b]+$/;
        const inputContent = event.currentTarget.value
        if (inputContent === '' || (numberFilter.test(inputContent))) {
            setValueIdCard(inputContent);
        }
    }
    const styles = useStyles();
    return (
        <React.Fragment>
            <FormControl className={styles.formControl}>
                <InputLabel htmlFor="cardIdInput" className={styles.labelInputIdCard}>
                    <span>Insira o ID CARD de 9 dígitos</span>
                </InputLabel>
                <CardIdInput
                    id="cardIdInput"
                    value={valueIdCard}
                    onChange={handleValueIdCard}
                    placeholder="000000000"
                    className={styles.inputIdCard}
                />
            </FormControl>
        </React.Fragment>
    )
}