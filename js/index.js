
// function randomArrayGenerator() {
//     let arr = [];
//     for (let i = 0; i < 50; i++) {
//         let num1 = Math.floor(Math.random() * 100);
//         arr.push(num1);
//     }
//     return arr;
// }



// function oddEven(value) {
//     let oddNumber = []
//     let evenNumber = []
//     for (let num of value) {
//         if (num % 2 == 0) {
//             evenNumber.push(num)
//         }
//         else {
//             oddNumber.push(num);
//         }
//     }
//     console.log("Random Numbers : " , value);
//     console.log("Odd Numbers : " , oddNumber);
//     console.log("Even Numbers : " , evenNumber);
// }

// const v1 = randomArrayGenerator();

// oddEven(v1);


// function time(){
// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
// }


function currentTime(){
let date= new Date()
document.getElementById("time").innerHTML=date.toLocaleTimeString()
}

setInterval(currentTime,1000);