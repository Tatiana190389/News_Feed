export default async function getWorldNews({ country }) {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}top-headlines?category=world&lang=ru&country=${country}&content=expand&apikey=${process.env.REACT_APP_API_KEY}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            }
        );
        const newsWorldData = await response.json();
        return newsWorldData;
    } catch (error) {
        console.error(error);
    }
}
