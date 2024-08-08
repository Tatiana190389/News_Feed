import Header from '../Header/Header';
import { createTheme, ThemeProvider, Container, Grid } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import MainPage from '../MainPage/MainPage';

const theme = createTheme({
    typography: {
        fontFamily: ['Merriweather'].join(','),
    },
});

const colorBackground = blueGrey[100];

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ backgroundColor: colorBackground, paddingBottom: 5 }}>
                <Grid container spacing={2}>
                    <Header title="КОРОЧЕ НОВОСТИ ..." />
                    <MainPage />
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;
