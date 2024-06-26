// nCr

// n = 10 , r = 4 

// ans = n! / (r!*(n-r)!)


// let n = 10
// let r = 4


// function nCr(n,r){
//     let f1 = 1
//     for(let  i = 1; i<=n; i++){
//         f1 = f1 * i
//     }

//     let f2 = 1
//     for(let  i = 1; i<=r; i++){
//         f2 = f2 * i
//     }


//     let f3 = 1
//     for(let  i = 1; i<=(n-r); i++){
//         f3 = f3 * i
//     }

//     console.log(f1, f2, f3)
//     console.log(f1/(f2*f3))

// }


// nCr(10,4) // 210




// function factorial(p){
//     let f1 = 1
//     for(let  i = 1; i<=p; i++){
//         f1 = f1 * i
//     }
//     // console.log(f1)
//     return f1
// }

// let n = 10
// let r = 4 

// // factorial(n)
// // factorial(r)
// // factorial(n-r)

// let ans = factorial(n)/(factorial(r)*factorial(n-r))

// console.log("ans",ans)
