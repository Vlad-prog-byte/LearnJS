const button = document.getElementsByClassName('button');
let flag = true;


button[0].addEventListener("click", () => {console.log(this)});

// function changeColor(event){
//     if(flag){
//         console.log(event.target);
//         event.target.style.backgroundColor = "red";
//         console.log(1);
//         flag = false;
//     }
//     else{
//         flag = true;
//         console.log(event.target);
//         event.target.style.backgroundColor = "blue";
//         console.log(2);
//     }
// }