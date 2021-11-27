import API from "./api";

const getSeats = async (sessionId) => {
    let status;
    let serverError;

    const result = await API.get(`/sessions/${sessionId}/seats`)
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
        message: `Looks like the session you're trying to see is not available`,
    }

    if(result.data) return {
        success: true,
        data: result.data,
    }

    return serverError;
}

const bookSeats = async (body) => {
    let status;
    let serverError;

    const result = await API.post("/seats/bookmany", body)
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
            message: `Looks like the seat you're trying to book is does not exist`,
        }

        if(status === 409) return {
            success: false,
            message: `Looks like the seat you're trying to book is already booked`,
        }

        if(status === 400) return {
            success: false,
            message: result.message,
        }
    
        if(result.data) return {
            success: true,
            data: result.data,
        }
    
        return serverError;
}

export {
    getSeats,
    bookSeats
}