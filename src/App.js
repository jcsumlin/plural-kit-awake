import {Container, Grid} from "@material-ui/core";
import Home from "./Home/home";


function App() {
    return (
        <Container>
            <Grid container id={'root'}>
                <Home/>
            </Grid>
        </Container>
    )
}

export default App;
