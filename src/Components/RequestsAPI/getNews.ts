export default async function getNews({ category, country, language }) {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}top-headlines?category=${category}&lang=${language}&country=${country}&content=expand&apikey=${process.env.REACT_APP_API_KEY}`,
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
