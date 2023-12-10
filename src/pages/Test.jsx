import * as React from 'react';
import {GenericPage} from "../components/GenericPage.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {Question} from "../components/Question.jsx";
import {Answers} from "../components/Answers.jsx";
import Button from "@mui/material/Button";
import {ArrowBack} from "@mui/icons-material";
import questions from "../resources/questions.json"
import {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import {Container} from "@mui/material";
import Stack from "@mui/material/Stack";
export const TestPage = () => {
    const navigate = useNavigate();

    const [questionNumber, setQuestionNumber] = useState(0);
    const [initialAnswers, setInitialAnswers] = useState({sex: null, sexuality : null});
    const [userAnswers, setUserAnswers] = useState([]);
    const numberOfQuestions = questions.length - 1;

    const goToResults = (params) =>  navigate({
        pathname: '/result',
        search: createSearchParams(params).toString(),
    });

    const handleLastAnswer = () => {
        const flattenUserAnswers = userAnswers.flat()
        const count = flattenUserAnswers.filter(Boolean).reduce((acc, lead) => {
            if (acc[lead]) {
                acc[lead]++
            } else {
                acc[lead] = 1;
            }

            return acc
        }, {})

        const {sex, sexuality} = initialAnswers;

        const sorted = Object.entries(count)
            .filter(([lead]) => {
                if (lead.includes('.')) {
                    const [prefix] = lead.split('.');

                    return [sex, sexuality, 'race', 'happy'].includes(prefix);
                }

                return lead === 'domestic_violence'
            })
            .sort((a, b) => {
                const [, countA] = a;
                const [, countB] = b;

                return countB - countA
            })
        const [leadOne, leadTwo] = sorted;

        const params = {
            category: leadOne[0] === 'domestic_violence' ? `${sex}.domestic_violence` : leadOne[0]
        }


        if (leadOne[1] === leadTwo[1]) {
            console.log('Choose between ', leadOne[0], ' and ', leadTwo[0])
            params.additional_category = leadTwo[0] === 'domestic_violence' ? `${sex}.domestic_violence` : leadTwo[0]
        }

        goToResults(params);
    }
    const handleAnswerClick = (leads) => {
        switch(questionNumber) {
            case 0:
                setInitialAnswers(prevState => ({...prevState, sex: leads[0]} ))
                break;
            case 1:
                setInitialAnswers(prevState => ({...prevState, sexuality: leads?.[0] || null}))
                break;
            default:
                setUserAnswers(prevState => [...prevState, leads])
        }
        if (questionNumber < numberOfQuestions)
            setQuestionNumber(prevState=> prevState + 1)
        else
            handleLastAnswer();
    }
    const handleBackClick = () => {
        switch(questionNumber) {
            case 1:
                setInitialAnswers(prevState => ({...prevState, sex: null} ))
                break;
            case 2:
                setInitialAnswers(prevState => ({...prevState, sexuality: null}))
                break;
            default:
                userAnswers.pop();
                const copy = [...userAnswers];
                setUserAnswers(copy)
        }
        if (questionNumber > 0)
            setQuestionNumber(prevState=> prevState - 1)
    }

    return (
        <GenericPage>
                <Button
                    sx={{
                        height: 'max-content'
                    }}
                    variant="text"
                    color="secondary"
                    size={'large'}
                    startIcon={<ArrowBack />}
                    disabled={questionNumber === 0}
                    onClick={handleBackClick}
                >
                    Zpět
                </Button>
            <Stack spacing={15} sx={{marginTop: '10vh'}}>
                <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Question question={questions[questionNumber].question}/>
                </Container>
                <Container maxWidth="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Answers answers={questions[questionNumber].answers} handleAnswerClick={handleAnswerClick}/>
                </Container>
            </Stack>
        </GenericPage>
    )
}
