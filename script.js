var btnplus = document.getElementsByClassName("fa-square-plus");
var btnmines = document.getElementsByClassName("fa-square-minus");
var btnsupp = document.getElementsByClassName("fa-trash-can");
var btnheart = document.querySelectorAll(".fa-heart");
// console.log(btnheart);

// btnplus[0].addEventListener("click" , function() {
//   qtt[0].nextElementSibling.innerHTML++;
// })

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    btnplus[i].nextElementSibling.innerHTML++;
    Total();
  });
}
for (let i = 0; i < btnmines.length; i++) {
  btnmines[i].addEventListener("click", function () {
    if (btnmines[i].previousElementSibling.innerHTML > 0) {
      btnmines[i].previousElementSibling.innerHTML--;
    }
    Total();
  });
}

for (let btnsupp of btnsupp) {
    btnsupp.addEventListener("click", function () {
      btnsupp.parentElement.parentElement.parentElement.remove();
      Total();
    });
}
for (let i =0 ; i< btnheart.length; i++){
  btnheart[i].addEventListener("click" , function(){
    btnheart[i].classList.toggle("toggleHeart");
  })
}
// for (let btnheart of btnheart) {
//   btnheart.addEventListener("click", function () {
//     btnheart.classList.toggle("toggleHeart");
//   });
// }
function Total() {
  let itemPrices = document.getElementsByClassName("prix");
  let itemQties = document.getElementsByClassName("quantite");
  let totalPrice = document.querySelector(".total-price");
  let total = 0;
  for (let i = 0; i < itemPrices.length; i++) {
    total += itemPrices[i].innerHTML * itemQties[i].innerHTML;
  }
  return (totalPrice.innerHTML = total);
}
