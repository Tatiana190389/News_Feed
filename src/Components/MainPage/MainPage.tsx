import { Grid, useTheme, useMediaQuery } from '@mui/material';
import NewsCardsList from '../NewsCardsList/NewsCardsList';
import WorldNews from '../WorldNews/WorldNews';
import Filters from '../Filters/Filters';
import NewsCategory from '../NewsCategory/NewsCategory';

export default function MainPage() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid item xs={12} container spacing={1}>
            <Filters />
            <NewsCategory />
            {!isSmallScreen ? <WorldNews /> : null}
            <NewsCardsList />
        </Grid>
    );
}
