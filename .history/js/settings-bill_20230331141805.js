// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


// totals Display
const calltotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalBillSettingsElement = document.querySelector(".totalSettings");

// Buttons
const addBtnSettingElement = document.querySelector(".addBtnSetting");
const updateBtnSettingElement = document.querySelector(".updateSettings");

// settings element
const callCostSettingEl = document.querySelector(".callCostSetting")
const smsCostSettingEl = document.querySelector(".smsCostSetting")
const warningSettingEl = document.querySelector(".warningLevelSetting")
const criticalLevelSettingEl = document.querySelector(".criticalLevelSetting")

// totals
let smsSettingTotal = 0;
let callSettingTotal = 0


// settings updated
let callValue = 2.75;
let smsValue = 0.75;
let warningValue = '';
let criticalValue = '';


    function updatedSettings() {
        callValue = callCostSettingEl.value ;
        smsValue = smsCostSettingEl.value ;
        warningValue = warningSettingEl.value ; 
        criticalValue = criticalLevelSettingEl.value ;
    }

    
    console.log(callValue)


    function totalBillWithSettings () {

        const checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked")

        


        if (checkedRadioBtn) {
            const billItemType = checkedRadioBtn.value;

            if (billItemType === "call") {
                callSettingTotal += callValue;
            } else if(billItemType === "sms") {
                smsSettingTotal += smsValue;
            }
        }

        calltotalSettingsElement.innerHTML = callSettingTotal
        smsTotalSettingsElement.innerHTML = smsSettingTotal.toFixed(2);
        const totalBill = callSettingTotal + smsSettingTotal;
        totalBillSettingsElement.innerHTML = totalBill.toFixed(2)

      


    }

    updateBtnSettingElement.addEventListener("click", updatedSettings)
    addBtnSettingElement.addEventListener("click", totalBillWithSettings)