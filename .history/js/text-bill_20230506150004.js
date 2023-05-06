// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen\index.html

const billTypeText = document.querySelector(".billTypeText");
const textTotalAddBtn = document.querySelector(".addToBillBtn");
const textTotalRemoveBtn = document.querySelector(".resetBtn");

let callsTotal = 0.0;
let smsTotal = 0.0;
let total = 0.0;

function textBillTotal() {
  const billTypeEntered = billTypeText.value.trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  total = callsTotal + smsTotal;

  if (total > 50) {
    totalElem.classList.add("danger");
  } else if (total > 30) {
    totalElem.classList.add("warning");
  }
  updateTemplate();
}

function removeTotal() {
  callsTotal = 0;
  smsTotal = 0;
}

function updateTemplate() {
  const templateSource = document.querySelector(".billTemplate").innerHTML;
  const userTemplate = Handlebars.compile(templateSource);
  const costDataElem = document.querySelector(".textTotals");
  const costData = {
    differentCosts: [
      { name: "Call", total: callsTotal.toFixed(2) },
      {
        name: "Sms",
        total: smsTotal.toFixed(2),
      },
      {
        name: "",
        total: total.toFixed(2),
      },
    ],
  };

  const userDataHTML = userTemplate(costData);
  costDataElem.innerHTML = userDataHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  updateTemplate();
});

textTotalAddBtn.addEventListener("click", textBillTotal);
textTotalRemoveBtn.addEventListener("click", removeTotal);
