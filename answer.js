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

function getDayType(day){
    day = day.toLowerCase();
    return day;
}
console.log(getDayType("SaturDay"));