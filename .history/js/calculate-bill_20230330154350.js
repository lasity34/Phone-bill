//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
const billStringElement = document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateBtnClicked () {

    const billString = billStringElement.value
    
    let billTotal = 0;
    const billItems = billString.split(",");
   
    for (let i = 0; i < billItems.length; i++) {
        const loopedBill = billItems[i]
        
      if (loopedBill.includes("sms")) {
          billTotal += 0.75;
      } else if(loopedBill.includes("call")) {
          billTotal += 2.75;
      }
    }
       

    if ( billTotal > 20 ) {
        billTotalElement.classList.add("warning")
    } else if ( billTotal > 30) {
        billTotalElement.classList.add("danger")
    } else {
        billTotalElement.classList.remove("warning")
        billTotalElement.classList.remove("danger")
    }
    
   const roundedTotalBill = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedTotalBill
  return `R${roundedTotalBill}`

}
//link the function to a click event on the calculate button

    calculateBtnElement.addEventListener("click", calculateBtnClicked)