// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen\index.html


const billTypeText = document.querySelector(".billTypeText")
const textTotalAddBtn = document.querySelector(".addToBillBtn")
const callsTotalElem = document.querySelector(".callTotalOne")
const smsTotalElem = document.querySelector(".smsTotalOne")
const totalElem = document.querySelector(".totalOne")


function textBillTotal() {

    let callsTotal = 0;
    let smsTotal = 0;

    const billTypeEntered = billTypeText.value.trim();

    if (billTypeEntered === "call") {
        callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
        smsTotal += 0.75
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2)
    smsTotalElem.innerHTML = smsTotal.toFixed(2)
    const total = callsTotal + smsTotal
    totalElem.innerHTML = total.toFixed(2)
}


 textTotalAddBtn.addEventListener("click", textBillTotal)