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
// function getCngFare(distance, isNight, waitingMinutes){
function getCngFare(distance,){
    if(distance<=2){
        return "50"
    }

}

// console.log(getCngFare(distance, isNight, waitingMinutes));
console.log(getCngFare(2));