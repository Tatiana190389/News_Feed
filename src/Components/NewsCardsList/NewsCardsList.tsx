import { fetchGetNews, fetchGetSearchNews, fetchGetNewsFromDate } from '../Thunk/Thunk';
import { Grid } from '@mui/material';
import NewsCard from '../NewsCard/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    allNews,
    selectCategory,
    selectSearchQuery,
    selectCountry,
    setDateFrom,
    setDateTo,
} from '../Slices/newsFilterSlice';

export default function NewsCardsList() {
    const setCategory = useSelector(selectCategory);
    const dispatch = useDispatch();
    const setNews = useSelector(allNews);
    const searchQuery = useSelector(selectSearchQuery);
    const setCountry = useSelector(selectCountry);
    const setLanguage = setCountry === 'ru' ? 'ru' : 'en';
    const selectDateFrom = useSelector(setDateFrom);
    const selectDateTo = useSelector(setDateTo);

    const isEmpty = searchQuery.length === 0;
    const newsShowed = useCallback(async () => {
        if (!isEmpty) {
            dispatch(fetchGetSearchNews({ searchQuery: searchQuery, country: setCountry, language: setLanguage }));
        } else if (selectDateFrom !== null && selectDateTo !== null) {
            dispatch(
                fetchGetNewsFromDate({
                    category: setCategory,
                    country: setCountry,
                    language: setLanguage,
                    dateFrom: selectDateFrom,
                    dateTo: selectDateTo,
                })
            );
        } else {
            dispatch(fetchGetNews({ category: setCategory, country: setCountry, language: setLanguage }));
        }
    }, [setCategory, searchQuery, setCountry, selectDateFrom, selectDateTo]);

    useEffect(() => {
        newsShowed();
    }, [setCategory, searchQuery, setCountry, selectDateFrom, selectDateTo]);

    return (
        <Grid item xs={12} sm={8} md={9} lg={9} container spacing={1}>
            {setNews.map((news) => (
                <Grid item key={news.id} xs={12}>
                    <NewsCard news={news} />
                </Grid>
            ))}
        </Grid>
    );
}
