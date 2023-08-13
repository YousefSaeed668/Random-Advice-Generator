let adviceBtn = document.getElementById("dice")
let adviceNum = document.querySelector(".id span")
let adviceSpan = document.querySelector("#advice span")

let url = "https://api.adviceslip.com/advice";
window.addEventListener("load",getAdvice)
async function getAdvice(){
  let res = await fetch(url);
  let {slip:{id,advice}} = await res.json();
  adviceNum.innerHTML = id;
  adviceSpan.innerHTML = advice;
}