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
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalElem = document.querySelector(".totalOne");

let callsTotal = 0;
let smsTotal = 0;

document.addEventListener("DOMContentLoaded", function () {
  const templateSource = document.querySelector(".userTemplate").innerHTML;

  const userTemplate = Handlebars.compile(templateSource);

  const costDataElem = document.querySelector(".billTotal");

  const costData = {
    
  };

  const userDatHTML = userTemplate(userData);
  userDataElem.innerHTML = userDatHTML;
});

function textBillTotal() {
  const billTypeEntered = billTypeText.value.trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  callsTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  const total = callsTotal + smsTotal;
  totalElem.innerHTML = total.toFixed(2);

  if (total > 50) {
    totalElem.classList.add("danger");
  } else if (total > 30) {
    totalElem.classList.add("warning");
  }
}

function removeTotal() {
  totalElem.innerHTML = 0;
  callsTotalElem.innerHTML = 0;
  smsTotalElem.innerHTML = 0;
  callsTotal = 0;
  smsTotal = 0;
}

textTotalAddBtn.addEventListener("click", textBillTotal);
textTotalRemoveBtn.addEventListener("click", removeTotal);

// document.addEventListener("DOMContentLoaded", function () {
//   const templateSource = document.querySelector(".userTemplate").innerHTML;

//   const userTemplate = Handlebars.compile(templateSource);

//   const userDataElem = document.querySelector(".userData");

//   const userData = {
//     users: [
//       {
//         username: "alan",
//         firstName: "Alan",
//         lastName: "Johnson",
//         email: "alan@test.com",
//       },
//       {
//         username: "allison",
//         firstName: "Allison",
//         lastName: "House",
//         email: "allison@test.com",
//       },
//       {
//         username: "ryan",
//         firstName: "Ryan",
//         lastName: "Carson",
//         email: "ryan@test.com",
//       },
//     ],
//   };

//   const userDataHTML = userTemplate(userData);
//   userDataElem.innerHTML = userDataHTML;

//   // study status
//   Handlebars.registerHelper("studyStatus", function (passingYear) {
//     if (passingYear < 2015) {
//       return "passed";
//     } else {
//       return "not passed";
//     }
//   });

// // get from template HTML
//   const templateScript = Handlebars.compile(templateSource)

//   // reference
//   const resultDataElement = document.querySelector(".resultData")

//   // data to check
//   var context = {
//     "students":[
//       {"name" : "John", "passingYear" : 2013},
//       {"name" : "Doe" , "passingYear" : 2016}
//     ]
//   }

//   //  place data in template
//   const resultDataHTML = templateScript(context)
// // display info
//   resultDataElement.innerHTML = resultDataHTML

// });
