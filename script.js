let string = "";
let button = document.querySelectorAll(".button");
//Array
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
//till here it clicks in console inspect