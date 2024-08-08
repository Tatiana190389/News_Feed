import { createAsyncThunk } from '@reduxjs/toolkit';
import getNews from '../RequestsAPI/getNews';
import getSearchNews from '../RequestsAPI/searcNews';
import getWorldNews from '../RequestsAPI/getWorldNews';
import getNewsFromDate from '../RequestsAPI/getNewsFromDate';

export const fetchGetNews = createAsyncThunk('newsFilter/getNews', async ({ category, country, language }) => {
    const result = await getNews({ category, country, language });
    return result;
});

export const fetchGetSearchNews = createAsyncThunk(
    'newsFilter/getSearchNews',
    async ({ searchQuery, country, language }) => {
        const result = await getSearchNews({ searchQuery, country, language });
        return result;
    }
);

export const fetchGetWorldNews = createAsyncThunk('newsFilter/getWorldNews', async ({ country }) => {
    const result = await getWorldNews({ country });
    return result;
});

export const fetchGetNewsFromDate = createAsyncThunk(
    'newsFilter/getNewsFromDate',
    async ({ category, country, language, dateFrom, dateTo }) => {
        const result = await getNewsFromDate({ category, country, language, dateFrom, dateTo });
        return result;
    }
);
