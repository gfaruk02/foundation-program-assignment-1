//Question No. 1 Value Detective

// function describeValue(value){

//     if(value){
//         return `"${typeof value} | truthy"`;
//     }else{
//         return `"${typeof value} | falsy"`;
//     }

//     //Ternary Operator
//     // return `${typeof value} | ${value ? "truthy" : "falsy"}`;

// };
// console.log(describeValue("0"));
// console.log(describeValue(NaN));
// console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
// console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));



//Question No. 2 Bangladesh Weekend Machine

// function getDayType(day){
//     day = day.toLowerCase();

//     switch(day){
//         case "friday":
//         case "saturday":
//             return "Weekend";

//         case "sunday":
//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
//             return "Working Day";

//         default:
//             return "Invalid Day"
//     }
//     // return day;
// }
// // console.log(getDayType("Friday"));
// // console.log(getDayType("friday"));
// // console.log(getDayType("MONDAY"));
// console.log(getDayType("Bandarban"));



//Question No. 3 Username Gatekeeper

// function validateUsername (username ){
//     if(username.length < 4){
//         return "To short";
//     }
//     else if(username.includes(" ")){
//         return "No Space Allowed";
//     }
//     else if(username.toLowerCase().includes("admin")){
//         return "Reserved Word";
//     }else{
//         return "Available";
//     }
// }

// console.log(validateUsername("abcd"))
// console.log(validateUsername("rahim123"))
// console.log(validateUsername("ab"))
// console.log(validateUsername("a b"))
// console.log(validateUsername("abcd"))
// console.log(validateUsername("rahim islam"))
// console.log(validateUsername("superadmin99"))
// console.log(validateUsername("Admin_Rahim"))



////Question No. 4 Dhaka CNG Fare Meter
// function getCngFare(distance, isNight=false, waitingMinutes=0){
//     let fare = 50;
//     if(distance <= 0){
//         fare = 0;
//     }    
//     if(distance > 2){
//         fare = fare + (distance - 2 )*15;
//     }
//     if(waitingMinutes > 0 ){
//         fare = fare + waitingMinutes*2;
//     }
//     if(isNight===true){
//         fare = fare * 1.2;
//     }
//     return fare;
    

// }

// console.log(getCngFare(distance, isNight, waitingMinutes));
// console.log(getCngFare(3, false, 2));
// console.log(getCngFare(0));

// console.log(getCngFare(2)) 
// console.log(getCngFare(1))
// console.log(getCngFare(5))
// console.log(getCngFare(10))
// console.log(getCngFare(5, false, 10))
// console.log(getCngFare(5, true))
// console.log(getCngFare(5, true, 10))


////Question No. 5 Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    if(runsNeeded <=0 ){
        return `"Win"`;
    }
    if(ballsLeft <= 0){
        return `"Lost"`;
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
    return `"${verdict}"`;
};
// console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));