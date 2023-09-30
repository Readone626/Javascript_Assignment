const sum =(...arg)=>{
   let num =0
   arg.forEach((arg)=>num+=arg)
   return num 
}
console.log(sum(9,7,6,5,3,6))