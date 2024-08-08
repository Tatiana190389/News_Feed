import { Grid, Paper, List, ListItem, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { selectWorldNews, selectCountry } from '../Slices/newsFilterSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchGetWorldNews } from '../Thunk/Thunk';
import { TravelExplore } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

const colorTitle = blue[900];

export default function WorldNews() {
    const worldNews = useSelector(selectWorldNews);
    const dispatch = useDispatch();
    const setCountry = useSelector(selectCountry);

    useEffect(() => {
        dispatch(fetchGetWorldNews({ country: setCountry }));
    }, [setCountry]);

    return (
        <Grid item xs={12} sm={4} md={3} lg={3}>
            <Paper sx={{ p: 1, backgroundColor: '#f5f5f5' }}>
                <Typography variant="body2" fontSize={14} textAlign="center" m={2} color={colorTitle}>
                    <TravelExplore color="primary" /> МИРОВЫЕ НОВОСТИ
                </Typography>
                <List>
                    {worldNews.map((news) => (
                        <ListItem divider key={news.id} sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
                            <Link to={news.source.url} target="_blank">
                                <Typography variant="body1" fontSize={12} color={colorTitle}>
                                    {news.title}
                                </Typography>
                            </Link>
                            <Box marginTop={3}>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ cursor: 'pointer', fontSize: 10, marginRight: 5, color: colorTitle }}
                                >
                                    Источник:{' '}
                                    <Link to={news.source.url} target="_blank">
                                        {news.source.name}
                                    </Link>
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Grid>
    );
}
