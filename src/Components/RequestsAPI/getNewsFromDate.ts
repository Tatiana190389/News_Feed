export default async function getNewsFromDate({ category, country, language, dateFrom, dateTo }) {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}top-headlines?category=${category}&lang=${language}&country=${country}&from=${dateFrom}&to=${dateTo}&apikey=${process.env.REACT_APP_API_KEY}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            }
        );
        const newsData = await response.json();
        return newsData;
    } catch (error) {
        console.error(error);
    }
}
