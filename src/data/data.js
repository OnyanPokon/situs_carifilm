class Data{
    static searchFilm(keyword) {
        const endpoint = `http://www.omdbapi.com/?apikey=1214fde9&s=${keyword}`;
        return fetch(endpoint)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.Search) {
                    return Promise.resolve(responseJson.Search);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`);
                }
            });
    }
}

export default Data;