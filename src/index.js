import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);
