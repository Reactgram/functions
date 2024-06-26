// let have a number: 456 
// step 1: find the sum of the digits of the number => 4+5+6 = 15
// step 2: add the original number + sum of the digits => 456 + 15 = 471
// step 3: find sum of digits of the number from step 2 => 4+7+1 = 12




// function sumOfDigits(n){
//     let sum  =0 
//     while(n>0){
//         let last = n%10
//         sum = sum + last
//         n = parseInt(n/10)
//     }
//     return sum
// }


// let x = 456 

// let step1 = sumOfDigits(x) // 15

// let step2 = x + step1 // 471

// let step3 = sumOfDigits(step2) // 12

// console.log(step3) // 12