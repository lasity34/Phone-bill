// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen\index.html

const textBillAddBtnElement = document.querySelector(".textBillAddBtn");

const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");

let callsTotal = 0;
let smsTotal = 0;
let total = 0;

function calculateTextBtn() {
  const billStringElement = document.querySelector(".billString");
  const billItems = billStringElement.value.trim().split(",");

  for (const billItem of billItems) {
    const currentItem = billItem.trim();
    if (currentItem === "call") {
      callsTotal += 2.75;
    } else if (currentItem === "sms") {
      smsTotal += 0.75;
    }
  }

  smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
  callTotalOneElement.innerHTML = callsTotal.toFixed(2);
  total = callsTotal + smsTotal;
  totalOneElement.innerHTML = total.toFixed(2);

  totalOneElement.classList.remove("danger");
  totalOneElement.classList.remove("warning");

  if (total > 30) {
    totalOneElement.classList.add("danger");
  } else if (total > 20) {
    totalOneElement.classList.add("warning");
  }
  updateTemplate();
}

function updateTemplate() {
  const templateSource = document.querySelector("#billTemplate").innerHTML;
  const userTemplate = Handlebars.compile(templateSource);
  const textTotalsTbody = document.querySelector(".textTotals tbody");
  const costData = {
    differentCosts: [
      { name: "Call", total: callsTotal.toFixed(2) },
      { name: "Sms", total: smsTotal.toFixed(2) },
      { name: "Overall", total: total.toFixed(2) },
    ],
  };
  const userDataHTML = userTemplate(costData);

  textTotalsTbody.innerHTML = userDataHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  updateTemplate();
});

textBillAddBtnElement.addEventListener("click", calculateTextBtn);
