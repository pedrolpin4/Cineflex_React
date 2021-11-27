import API from "./api";
const getMovies= async () => {
    let serverError;

    const result = await API.get("/movies")
        .catch(err => {
            serverError = {
                success: false,
                message: "It looks like our server is not okay, we'll fix it ASAP!!"
            }     
    
        });

    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError;
}

const getSessions = async (movieId) => {
    let status;
    let serverError;

    const result = await API.get(`/movies/${movieId}/sessions`)
        .catch(err => {
            if(err.response){
                status = err.response.status;
            }

            serverError = {
                success: false,
                message: "It looks like our server is not okay, we'll fix it ASAP!!"
            }     
        });

    if(status === 404) return {
        success: false,
        message: `Looks like the movie you're trying to see is not available`,
    }

    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError;
}

export {
    getMovies,
    getSessions
}