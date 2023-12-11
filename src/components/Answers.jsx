import * as React from 'react';
import Stack from '@mui/material/Stack';
import {AnswerButton} from "./AnswerButton.jsx";
import {useMediaQuery} from "@mui/material";

export const Answers = (props) => {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const stackDirection = isDesktop ? 'row' : 'column';
    let buttonSx = isDesktop ? {fontSize: '1.5rem'} : {fontSize: '2rem'};
    buttonSx = isDesktop ? {fontSize: '1rem'} : {fontSize: '1.5rem'};
    return (
        <Stack direction={stackDirection} width={isDesktop ? "auto" : "80%"} spacing={2}>
            {props.answers.map((answer) =>
                <AnswerButton
                    key={answer.content}
                    content={answer.content}
                    leads={answer.leads}
                    handleAnswerClick={props.handleAnswerClick}
                    buttonSx={buttonSx}

                />
            )}
        </Stack>
    )
}
