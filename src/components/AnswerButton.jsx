import * as React from 'react';
import {Button} from "@mui/material";

export const AnswerButton = (props) => {
    const {content, leads, handleAnswerClick} = props;

    return (
        <Button variant="contained" color="info" size="large" onClick={() => handleAnswerClick(leads)}>
            {content}
        </Button>
    )
}
