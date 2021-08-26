import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import Home from "./Home/home";
import colorPalette from "./data/theme.json"

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'body': {
                    backgroundColor: colorPalette.backgroundColor,
                },
                '.member-card-image': {
                    borderColor: colorPalette.aviBorderColor,
                    textShadow: `-1px -1px 0 ${colorPalette.textBorderColor}, 1px -1px 0 ${colorPalette.textBorderColor}, -1px 1px 0 ${colorPalette.textBorderColor}, 1px 1px 0 ${colorPalette.textBorderColor}`
                },
                'h1,h2,h3,h4,h5,h6': {
                    textShadow: `-1px -1px 0 ${colorPalette.textBorderColor}, 1px -1px 0 ${colorPalette.textBorderColor}, -1px 1px 0 ${colorPalette.textBorderColor}, 1px 1px 0 ${colorPalette.textBorderColor}`
                }
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: colorPalette.containerBackgroundColor,
                color: colorPalette.textColor
            }
        },
        MuiTypography: {
            root: {
                color: colorPalette.textColor
            },
        }
    }
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <Grid container id={'root'}>
                    <Home/>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default App;
