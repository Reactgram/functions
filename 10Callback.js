

function hello(fun1){
    // fun1 =  ()=>{sum(10,20)}
    // console.log(fun1)
   
    fun1()
}


// function fun1(){
//      sum(10,20)
// }



let sum = (a,b)=>{
    console.log(a+b)
}

// anonymous function

// hello(sum(10,20))
hello(()=>{sum(10,20)})


// ()=>{
//     sum(10,20)
// }


