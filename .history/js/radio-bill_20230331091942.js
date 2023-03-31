// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billItemElement = document.querySelector(".billItemTypeRadio")
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn")
const callTotalTwoElement = document.querySelector(".callTotalTwo")
const smsTotalTwoElement = document.querySelector(".smsTotalTwo")
const totalTwoElement = document.querySelector(".totalTwo")
const checkedRadioBtnElement = document.querySelector("input[name = billItemType]: checked")

const smsTotal = 0;
const callTtotal = 0;

    function calculateRadioBtn () {

        const totalBill = 0;
        let billItemType;
        if(checkedRadioBtnElement) {
            billItemType = checkedRadioBtnElement.value;
        }

        console.log(billItemElement)



    } 