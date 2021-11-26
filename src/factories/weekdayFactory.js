const weekDayFactory = (weekNumber) => {
    let weekday = ""

    switch(weekNumber){
        case 0: {
            weekday = "Sunday"
            break;
        }
        case 1: {
            weekday = "Saturday"
            break;
        }
        case 2: {
            weekday = "Monday"
            break;
        }
        case 3: {
            weekday = "Tuesday"
            break;
        }
        case 4: {
            weekday = "Wednesday"
            break;
        }
        case 5: {
            weekday = "Thursday"
            break;
        }
        case 6: {
            weekday = "Friday"
            break;
        }
        default:{
            weekday = "none"
            break;
        } 
    }

    return weekday
}

export default weekDayFactory