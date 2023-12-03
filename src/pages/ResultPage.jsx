import React, {useEffect, useState} from 'react';
import {GenericPage} from "../components/GenericPage.jsx";
import {useSearchParams} from "react-router-dom";
import {ResultTitle} from "../components/ResultTitle.jsx";
import {ResultDescription} from "../components/ResultDescription.jsx";
import {ResultSteps} from "../components/ResultSteps.jsx";
import Typography from "@mui/material/Typography";
import results from "../resources/results.json"

export const ResultPage = () => {
    const [searchParams] = useSearchParams();
    const [result, setResult] = useState(null);

    useEffect(() => {
        const category = searchParams.get('category');
        setResult(results[category])
    }, [searchParams]);


    console.log(searchParams.get('category'));
    console.log(searchParams.get('additional_category'));

    if (result)
        return <GenericPage>
            <ResultTitle title={result.title}/>
            <ResultDescription descriptions={result.descriptions}/>
            <ResultSteps steps={result.steps}/>
            <Typography variant="body1" component="div" align='center'>
                {result.end_desc}
            </Typography>
        </GenericPage>
    return <div>add button to take test</div>
}