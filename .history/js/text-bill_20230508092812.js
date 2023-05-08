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
const totalElem = document.querySelector(".total");
const textCostDataElem = document.querySelector(".textTotals");

let callsTotal = 0.0;
let smsTotal = 0.0;
let totaltext = 0.0;

function textBillTotal() {
  const billTypeEntered = billTypeText.value.trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  totaltext = callsTotal + smsTotal;
  updateTextTemplate();
  if (totaltext > 50) {
    textCostDataElem.classList.add(".danger:last-child");
  } else if (totaltext > 30) {
    textCostDataElem.classList.add("warning:last-child");
  }

}

function removeTotal() {
  callsTotal = 0;
  smsTotal = 0;
  updateTextTemplate();
}

function updateTextTemplate() {
    const templateSource = document.querySelector("#billTemplate").innerHTML;
    const textTemplate = Handlebars.compile(templateSource);
   
    const costData = {
      differentCosts: [
        { name: "Call", total: callsTotal.toFixed(2) },
        {
          name: "Sms",
          total: smsTotal.toFixed(2),
        },
        {
          name: "",
          total: totaltext.toFixed(2),
        },
      ],
    };
  
    const userDataHTML = textTemplate(costData);
   
    textCostDataElem.innerHTML = userDataHTML;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateTextTemplate();
  });

textTotalAddBtn.addEventListener("click", textBillTotal);
textTotalRemoveBtn.addEventListener("click", removeTotal);
