import axios from "axios";

const getPlot = async (imdbId) => {
    let serverError;
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
        params: {tconst: imdbId, currentCountry: imdbId},
        headers: {
          'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          'x-rapidapi-key': 'e92ba439a7msh975dfbc3feb391dp143850jsn4401de4bb1f7'
        }
    };

    const result = await axios.request(options)
        .catch((response) => {
            serverError = {
                success: false,
                message: 'Failed to connect with imdb server',
            }
        });

    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError
}

export {
    getPlot,
}