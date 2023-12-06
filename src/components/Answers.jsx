import * as React from 'react';
import Stack from '@mui/material/Stack';
import {AnswerButton} from "./AnswerButton.jsx";

export const Answers = (props) => {
    return (
        <Stack direction="row" spacing={2}>
            {props.answers.map((answer) =>
                <AnswerButton
                    key={answer.content}
                    content={answer.content}
                    leads={answer.leads}
                    handleAnswerClick={props.handleAnswerClick}
                />
            )}
        </Stack>
    )
}

