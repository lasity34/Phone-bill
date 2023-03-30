//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal")
//get a reference to the billString
const billStringElement = document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function calculateBtnClicked () {


    let totalBill = 0;
    const feeType = str.split(",");
    
    for (let i = 0; i < feeType.length; i++) {
        const loopedFees = feeType[i]
        
      if (loopedFees.includes("sms")) {
          totalBill += 0.65;
      } else if(loopedFees.includes("call")) {
          totalBill += 2.75;
      }
    }
    
   const wholeNum = totalBill.toFixed(2);
  
  return `R${wholeNum}`

}
//link the function to a click event on the calculate button

    calculateBtnElement.addEventListener("click", calculateBtnClicked())