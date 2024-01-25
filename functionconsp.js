function welcomeUser(){
    let name = "Aryan,";
    let msg = "Hello!" + name + "I'm learning js";
    console.log(msg);
}
welcomeUser();

//function using parameter
function greetUser(name){
    let messg = "Hello!" + name + "I'm learning js";
    console.log(messg);
}
greetUser("Rithi");
greetUser("Praha");

//function using two parameters
function twoUser(firstName,lastName){
    let messg = "Hello!" + firstName +  " " + lastName + "I'm learning js";
    console.log(messg);
}
twoUser("Rithi", "Kumar");
twoUser("Praha","Ram");

//function using integer
function addNum(no1,no2){

    console.log(no1+no2);
}
addNum(11, 10);

