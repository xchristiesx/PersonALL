import * as React from 'react';
import {Button} from "@mui/material";

export const AnswerButton = (props) => {
    const {content, handleAnswerClick} = props;

    return (
        <Button variant="contained" color="info" size="large" onClick={handleAnswerClick}>
            {content}
        </Button>
    )
}