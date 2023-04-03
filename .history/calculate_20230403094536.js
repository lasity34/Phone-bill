

    const billStringEl = document.querySelector(".billString");
    const calculateBtn = document.querySelector(".calculateBtn");
    const billTotalEl = document.querySelector("billTotal")



    function calculateBtn() {

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

        if (billTotal > 50) {
            billStringEl.classList.add("critical")
        } else if (billTotal > 30) {
            billStringEl.classList.add("warning")
        }
    }