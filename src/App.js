import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import Home from "./Home/home";

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'body': {
                    backgroundColor: process.env.REACT_APP_BACKGROUND_COLOR ? process.env.REACT_APP_BACKGROUND_COLOR : '#2C394B',
                },
            },
        },
        MuiPaper: {
            root:{
                backgroundColor: process.env.REACT_APP_CONTAINER_BACKGROUND_COLOR ? process.env.REACT_APP_CONTAINER_BACKGROUND_COLOR : '#082032',
                color: process.env.REACT_APP_TEXT_COLOR ? process.env.REACT_APP_TEXT_COLOR : '#fff'
            }
        },
        MuiTypography: {
            root: {
                color: process.env.REACT_APP_TEXT_COLOR ? process.env.REACT_APP_TEXT_COLOR : '#fff'
            },
        }
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container id={'root'}>
                    <Home/>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default App;
