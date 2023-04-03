

const billTypeTextEl = document.querySelector(".billTypeText");
const addBillToBtnEl = document.querySelector(".addBillToBtn");
const callTotalStr = document.querySelector(".callTotalOne");
const smsTotalStr = document.querySelector(".smsTotalOne")
const billTotalStr = document.querySelector(".totalOne");


let totalSms = 0;
let totalCall = 0;


    function calculateTextBill() {

       const billTypeText = billTypeTextEl.value

        let totalBill = 0;

       if (billTypeText.includes("sms")) {
            totalBill += 0.75
       } else if (billTypeText.includes("call")) {
            totalBill += 2.75
       }


    }