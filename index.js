// code your solution here
function saturdayFun(activity = "roller-skate"){ 
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
console.log(saturdayFun("bathe my dog"));

function mondayWork(work = "go to the office"){
    return (`This Monday, I will ${work}.`);

}
console.log(mondayWork);
console.log("work from home");

function wrapAdjective(wrapper){
return function(adjective){
    return `You are ${wrapper}${adjective}${wrapper}!`;
};
}
const star = wrapAdjective("*");
console.log(star("a hard worker"));

const sticks = wrapAdjective("||");
console.log(sticks("a dedicated programmer"));

