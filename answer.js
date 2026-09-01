//Question No. 1 Value Detective

function describeValue(value){

    if(value){
        return `" ${typeof value} | truthy "`;
    }else{
        return `" ${typeof value} | falsy"`;
    }
};
// console.log(describeValue("0"))
console.log(describeValue(NaN))
// console.log(describeValue("hello"));	//"string | truthy"
// console.log(describeValue(""));	//"string | falsy"
// console.log(describeValue(25));	//"number | truthy"
// console.log(describeValue(0));	//"number | falsy"
// console.log(describeValue(true));	//"boolean | truthy"
// console.log(describeValue(null));	//"object | falsy"
// console.log(describeValue(undefined));