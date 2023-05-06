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

let callsTotal = 0.00;
let smsTotal = 0.00;
let total = 0.00


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


  
}

function removeTotal() {
  totalElem.innerHTML = 0;
  callsTotalElem.innerHTML = 0;
  smsTotalElem.innerHTML = 0;
  callsTotal = 0;
  smsTotal = 0;
}


document.addEventListener("DOMContentLoaded", function () {
    const templateSource = document.querySelector(".userTemplate").innerHTML;
  
    const userTemplate = Handlebars.compile(templateSource);
  
    const costDataElem = document.querySelector(".textTotals");
  
    const costData = {
      differentCosts : [
      {  name : "Call",
         total :  callsTotal,
    },
    {
        name : "Sms",
        total : smsTotal
    },
    {
        name : "",
        total : total
    }
      ] 
    };

    
//   const userDataHTML = userTemplate(userData);
//   userDataElem.innerHTML = userDataHTML;


  
    const userDataHTML = userTemplate(costData);
    costDataElem.innerHTML = userDataHTML;
  });

textTotalAddBtn.addEventListener("click", textBillTotal);
textTotalRemoveBtn.addEventListener("click", removeTotal);


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
