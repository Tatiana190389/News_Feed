import { createSlice } from '@reduxjs/toolkit';
import { fetchGetNews, fetchGetNewsFromDate, fetchGetSearchNews, fetchGetWorldNews } from '../Thunk/Thunk';

const initialNewsState = {
    category: 'general',
    news: [],
    searchQuery: '',
    country: 'ru',
    worldNews: [],
    language: 'ru',
    dateFrom: null,
    dateTo: null,
};

const newsFilterSlice = createSlice({
    name: 'newsFilter',
    initialState: initialNewsState,
    reducers: {
        changeCategory(state, action) {
            state.category = action.payload;
        },
        changedSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        changeCountry(state, action) {
            state.country = action.payload;
        },
        changeDateFrom(state, action) {
            state.dateFrom = action.payload;
        },
        changeDateTo(state, action) {
            state.dateTo = action.payload;
        },
        resetDates(state) {
            state.dateFrom = initialNewsState.dateFrom;
            state.dateTo = initialNewsState.dateTo;
        },
        resetSearchQuery(state) {
            state.searchQuery = initialNewsState.searchQuery;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetNews.fulfilled, (state, action) => {
            state.news = action.payload.articles;
        });
        builder.addCase(fetchGetSearchNews.fulfilled, (state, action) => {
            state.news = action.payload.articles;
        });
        builder.addCase(fetchGetWorldNews.fulfilled, (state, action) => {
            state.worldNews = action.payload.articles;
        });
        builder.addCase(fetchGetNewsFromDate.fulfilled, (state, action) => {
            state.news = action.payload.articles;
        });
    },
});

const selectCategory = (state) => state.newsFilter.category;
const allNews = (state) => state.newsFilter.news;
const setNews = (state) => state.newsFilter.selectNews;
const selectSearchQuery = (state) => state.newsFilter.searchQuery;
const selectCountry = (state) => state.newsFilter.country;
const selectWorldNews = (state) => state.newsFilter.worldNews;
const setDateFrom = (state) => state.newsFilter.dateFrom;
const setDateTo = (state) => state.newsFilter.dateTo;

export const {
    changeCategory,
    changedSearchQuery,
    changeCountry,
    changeDateFrom,
    changeDateTo,
    resetDates,
    resetSearchQuery,
} = newsFilterSlice.actions;
export { selectCategory, allNews, setNews, selectSearchQuery, selectCountry, selectWorldNews, setDateTo, setDateFrom };
export default newsFilterSlice.reducer;
