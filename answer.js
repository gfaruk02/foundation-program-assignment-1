//Question No. 1 Value Detective
function describeValue(value){
    if(value){
        return `${typeof value} | truthy`;
    }else{
        return `${typeof value} | falsy`;
    }
}; 

//Question No. 2 Bangladesh Weekend Machine
function getDayType(day){
    day = day.toLowerCase();

    switch(day){
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day"
    };
};

//Question No. 3 Username Gatekeeper
function validateUsername (username ){
    if(username.length < 4){
        return "To short";
    }
    else if(username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }else{
        return "Available";
    }
};

//Question No. 4 Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;
    if(distance <= 0){
        fare = 0;
    }    
    if(distance > 2){
        fare = fare + (distance - 2 ) * 15;
    }
    if(waitingMinutes > 0 ){
        fare = fare + waitingMinutes * 2;
    }
    if(isNight === true){
        fare = fare * 1.2;
    }
    return fare; 
}; 

//Question No. 5 Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    if(runsNeeded <=0 ){
        return `Win`;
    }
    if(ballsLeft <= 0){
        return `Lost`;
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;
    if(requiredRate <= 6){
        verdict = "Comfortable";
    }else if(requiredRate <= 12){
        verdict = "Tough";
    }else{
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};