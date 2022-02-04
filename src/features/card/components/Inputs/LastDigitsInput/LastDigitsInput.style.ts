import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    passwordInputBody: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "9px",
        marginTop: "4px"
    },
    passwordInputContent: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },

    DigitsInput: {
        "& input":{
            marginRight: 30,
            fontSize: 45,
            border: "0.8px solid #c4c4c4",
            boxSizing: "border-box",
            borderRadius: "3px",
            width: 45,
            height: 55,
            caretColor: "transparent"
        }
    }
})