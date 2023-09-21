const axios = require('axios');

class Data{
    static searchFilm(keyword) {
        const apikey = '1214fde9'
        const endpoint = `http://www.omdbapi.com/?apikey=${apikey}&s=${keyword}`;
        return axios.get(endpoint)
            .then(response => {
                if(response.data.Search){
                    return response.data.Search;
                }else{
                    throw new Error(`${keyword} tidak ditemukan`);
                }
            })
            .catch(error => {
                throw error;
            })
    }
}

export default Data;