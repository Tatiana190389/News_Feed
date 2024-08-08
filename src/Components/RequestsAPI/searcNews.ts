export default async function getSearchNews({ searchQuery, language, country }) {
    try {
        const response = await fetch(
            `https://gnews.io/api/v4/search?q=${searchQuery}&lang=${language}&country=${country}&in=title,description&sortby=publishedAt&apikey=${process.env.REACT_APP_API_KEY}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            }
        );
        const searchNewsData = await response.json();
        return searchNewsData;
    } catch (error) {
        console.error(error);
    }
}
