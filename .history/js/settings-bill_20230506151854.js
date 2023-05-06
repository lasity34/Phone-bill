

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
const callCostSettingEl = document.querySelector(".callCostSetting");
const smsCostSettingEl = document.querySelector(".smsCostSetting");
const warningSettingEl = document.querySelector(".warningLevelSetting");
const criticalLevelSettingEl = document.querySelector(".criticalLevelSetting");

// totals
let smsSettingTotal = 0;
let callSettingTotal = 0;

// settings updated
let callValue = 0;
let smsValue = 0;
let warningValue = 0;
let criticalValue = 0;
let totalBill = 0

function updatedSettings() {
  callValue = parseInt(callCostSettingEl.value) || 0 ;
  smsValue = parseInt(smsCostSettingEl.value);
  warningValue = parseInt(warningSettingEl.value);
  criticalValue = parseInt(criticalLevelSettingEl.value)
  totalBillSettingsElement.classList.remove("danger")
  totalBillSettingsElement.classList.remove("warning")

  if (totalBill >= criticalValue) {
    totalBillSettingsElement.classList.add("danger")
} else if (totalBill >= warningValue) {
    totalBillSettingsElement.classList.add("warning")
}


}

function totalBillWithSettings() {
  const checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );

  if (checkedRadioBtn) {
    const billItemType = checkedRadioBtn.value;

    if(totalBill < criticalValue ) {

        if (billItemType === "call") {
            callSettingTotal += callValue;
          } else if (billItemType === "sms") {
            smsSettingTotal += smsValue;
          }
    }
   
  }


  calltotalSettingsElement.innerHTML = callSettingTotal.toFixed(2);
  smsTotalSettingsElement.innerHTML = smsSettingTotal.toFixed(2);
  totalBill = callSettingTotal + smsSettingTotal;
  totalBillSettingsElement.innerHTML = totalBill.toFixed(2);

  totalBillSettingsElement.classList.remove("danger")
  totalBillSettingsElement.classList.remove("warning")

  if (totalBill >= criticalValue) {
        totalBillSettingsElement.classList.add("danger")
  } else if (totalBill >= warningValue) {
        totalBillSettingsElement.classList.add("warning")
  }
}

updateBtnSettingElement.addEventListener("click", updatedSettings);
addBtnSettingElement.addEventListener("click", totalBillWithSettings);
