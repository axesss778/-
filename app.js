// let p = document.querySelectorAll(".text")
// let arr = ['text 1', 'text 2', 'text 3']

// // 1
// p.forEach((item, i) => {
//     item.textContent = arr[i]
    
// })



 let res = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"]
let res2 = ["red", "green", "blue", "black", "yellow", "red"]


let p = document.querySelectorAll("#text")
console.log(p);
p.forEach((item, index) =>{
    item.textContent = res[index]
    // item.textContent = res2[index]
    
    
})


let p2 = document.querySelectorAll("#text")
p2.forEach((item, i) => {
    item.style.background`` = res2[i]
})



