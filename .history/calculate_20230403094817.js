

    const billStringEl = document.querySelector(".billString");
    const calculateBtn = document.querySelector(".calculateBtn");
    const billTotalEl = document.querySelector(".billTotal")



    function calculateBill() {

        const billItems = billStringEl.value.split(",");

        let billTotal = 0;
        
        for (let i = 0; i < billItems.length; i++) {

            const itemLoop = billItems[i];

            if (itemLoop.includes("sms")){
                billTotal += 0.75
            } else if (itemLoop.includes("call")) {
                billTotal += 2.75
            }
        }

        billTotalEl.innerHTML = billTotal

        billStringEl.classList.remove("warning");
        billStringEl.classList.remove("critical")

        if (billTotal > 30) {
            billStringEl.classList.add("critical")
        } else if (billTotal > 20) {
            billStringEl.classList.add("warning")
        }
    }


    calculateBtn.addEventListener("click", calculateBill)