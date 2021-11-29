const hourFactory = (minutes) => {
    const hour = Math.floor(minutes/60);
    const min = minutes % 60;
    return `${hour}h ${min}m`
}

export default hourFactory