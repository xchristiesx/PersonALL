import React, {useEffect, useState} from 'react';
import {GenericPage} from "../components/GenericPage.jsx";
import {useSearchParams} from "react-router-dom";
import {ResultTitle} from "../components/ResultTitle.jsx";
import {ResultDescription} from "../components/ResultDescription.jsx";
import {ResultSteps} from "../components/ResultSteps.jsx";
import {TestNotTaken} from "../components/TestNotTaken.jsx";
import Typography from "@mui/material/Typography";
import results from "../resources/results.json"
import {ResultEndDescription} from "../components/ResultEndDescription.jsx";
import {ResultContacts} from "../components/ResultContacts.jsx";

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
            <ResultDescription descriptions={result.descriptions} />
            <ResultSteps steps={result.steps}/>
            <ResultEndDescription end_desc={result.end_desc}/>
            <ResultContacts />
        </GenericPage>
    return <GenericPage>
        <TestNotTaken />
    </GenericPage>
}