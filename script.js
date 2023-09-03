let total = 0;
let addTotal = 0;

function clickHandel(target) {
  const itemName = target.parentNode.childNodes[3].childNodes[1].innerText;
  const newLi = document.createElement("li");

  newLi.innerText = itemName;

  const itemNumber = document.getElementById("ul-list");
  itemNumber.appendChild(newLi);

  const itemPrice =
    target.parentNode.childNodes[3].childNodes[5].innerText.split(".")[0];

  // total

  total = parseInt(total) + parseInt(itemPrice);

  const firstTotal = (document.getElementById("first-Price").innerText = total);

  //   disabled button condition
  const applyFeild = document.getElementById("apply-feild");
  const applyBtn = document.getElementById("apply-btn");

  if (total >= 200) {
    applyFeild.disabled = false;
    
  }
  if (total >= 200) {
    
    applyBtn.disabled = false;
  }

  const makePurchaseBtn = document.getElementById("make-purchase");

  if (total >= 25) {
    makePurchaseBtn.disabled = false;
  }
}

// Promo CODE

document.getElementById("apply-btn").addEventListener("click", function () {
  const applyCuppon = document.getElementById("apply-feild");
  applyValue = applyCuppon.value;

  if (applyValue !== "SELL200") {
    alert("Invalid Cupon Code");
    applyValue = "";
    return;
  } else {
    const discountPercentage = 20;
    const discountAmmount = (total * discountPercentage) / 100;
    const discountNew = (document.getElementById("Discount-Price").innerText =
      discountAmmount.toFixed(0));
    const finalTotal = total - discountNew;
    document.getElementById("Final-Total").innerText = finalTotal.toFixed(0);
  }
});

function refreshPage() {
  window.location.reload();
}
