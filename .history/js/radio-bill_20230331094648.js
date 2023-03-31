// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
const checkedRadioBtnElement = document.querySelector("input[name='billItemType']:checked") 
// "input[name='billItemType']:checked"
const callTotalTwoElement = document.querySelector(".callTotalTwo") 
const smsTotalTwoElement = document.querySelector(".smsTotalTwo")
const totalTwoElement = document.querySelector(".totalTwo")

let smsTotalRadio = 0;
let callTotalRadio = 0;

    function calculateRadioBtn () {

        
        let billItemType;
        if(checkedRadioBtnElement) {
            billItemType = checkedRadioBtnElement.value;
        }
        console.log(billItemType)
        if (billItemType === "call") {
            callTotalRadio += 2.75
        } else if (billItemType === "sms") {
            smsTotalRadio += 0.75
        }


        smsTotalTwoElement.innerHTML = smsTotalRadio.toFixed(2);
        callTotalTwoElement.innerHTML = callTotalRadio.toFixed(2);
        const totalBill = callTotalRadio + smsTotalRadio;
        totalTwoElement.innerHTML = totalBill.toFixed(2)


    
        if(totalBill > 30) {
            totalTwoElement.classList.add("warning")
        }

    } 

    radioBillAddBtnElement.addEventListener("click", calculateRadioBtn)