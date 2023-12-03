import {GenericPage} from "../components/GenericPage.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {Question} from "../components/Question.jsx";
import {Answers} from "../components/Answers.jsx";
import Button from "@mui/material/Button";
import {ArrowBack} from "@mui/icons-material";
import questions from "../resources/questions.json"
import {useState} from "react";

export const TestPage = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const numberOfAnswers = questions.length - 1;
    const handleAnswerClick = () => {
        if (questionNumber < numberOfAnswers)
            setQuestionNumber(prevState=> prevState + 1)
    }
    const handleBackClick = () => {
            if (questionNumber > 0)
                setQuestionNumber(prevState=> prevState - 1)
    }

    return (<GenericPage>
        <Grid container spacing={1} height='calc(100vh - 64px)'>
            <Grid md={1} mdOffset={2} display="flex" justifyContent="start" alignItems="left">
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
            </Grid>
            <Grid md={8} mdOffset={2} display="flex" justifyContent="center" alignItems="center">
                    <Question question={questions[questionNumber].question}/>
            </Grid>
            <Grid md={8} mdOffset={2} display="flex" justifyContent="center" alignItems="center">
                <Answers answers={questions[questionNumber].answers} handleAnswerClick={handleAnswerClick}/>
            </Grid>
        </Grid>
    </GenericPage>)
}

