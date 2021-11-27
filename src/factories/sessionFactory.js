const sessionFactory = (answer) => {
    let acumulator = [];

    answer.data.sessions.forEach(e => {
        if(acumulator.some(acum => acum.date === e.date)) {
            acumulator.map(acum => {
                if(acum.date === e.date){
                    return ({
                        id: e.id,
                        date: acum.date,
                        weekday: acum.weekday,
                        hours: acum.hours.push({
                            id: e.id,
                            hour: e.hour,
                        }),
                    })
                }

                return acum;
            })
            return;
        }

        acumulator.push({
            id: e.id,
            date: e.date,
            weekday: e.weekday,
            hours: [{
                id: e.id,
                hour: e.hour,
            }],
        })
    });

    return acumulator
}

export default sessionFactory;