import {GenericPage} from "../../components/GenericPage.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {Question} from "../../components/Question.jsx";


export const TestPage = () => {
    return (<GenericPage>
        <Grid container spacing={1}>
            <Grid md={8} mdOffset={2} display="flex" justifyContent="center" alighItems="center">
                    <Question />
            </Grid>
            <Grid md={8} mdOffset={2}>
                <div>xs=4</div>
            </Grid>
            <Grid md={1} mdOffset={1}>
                <div>xs=4</div>
            </Grid>
            <Grid md={1} mdOffset={8}>
                <div>xs=8</div>
            </Grid>
        </Grid>
    </GenericPage>)
}

