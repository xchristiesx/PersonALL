import * as React from 'react';
import {GenericPage} from "../components/GenericPage.jsx";
import {useSearchParams} from "react-router-dom";

export const ResultPage = () => {
    const [searchParams] = useSearchParams()

    console.log(searchParams);
    return <GenericPage/>
}