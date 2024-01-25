// //for loop(initian Expression;condition;iteration or increment)
// for(let i=2;i<=10;i+=2){
//     //2<=10 condition true output 2
//     //2<=10 (2+2=4)output 4
//     //4<=10 (4+2)output 6
//     //6<=10 (6+2)output 8
//     //8<=10 (8+2)output 10
//     //10<=10(10+2)output 12
//     console.log(i);
// }

// //print odd number between 1 to 10
// for(let i=1;i<=10;i+=2){
//     //1<=10 condition true output 1
//     //1<=10 (1+2=3)output 3
//     //3<=10 (3+2)output 7
//     //7<=10 (6+2)output 9
//     //9<=10 (8+2)output 11
//     console.log(i);
// }

//inbetween specific range odd numbers
const start=5;
const end=15;
for(let i=start;i<=end;i++){
if(i%2 !==0){
    console.log(i);
}
}

//inbetween specific range even numbers
const starts=5;
const ends=15;
for(let i=starts;i<=ends;i++){
if(i%2 ===0){
    console.log(i);
}
}