


    const billStringEl = document.querySelector(".billstring");
    const calculateBtn = document.querySelector(".calculateBtn");
    const billTotalEl = document.querySelector(".billtotal")


        function calculateBill () {

            const billStringVal = billStringEl.value

            const billItems = billStringVal.split(",")

            let totalBill = 0;
            for (let i = 0; i < billItems.length; i++) {

                const itemLoop = billItems[i]

                if (itemLoop === "sms") {
                    totalBill += 0.75
                } else if (itemLoop === "call") {
                    totalBill += 2.75
                }

            }

            billTotalEl.innerHTML = totalBill.toFixed(2)

        }


        calculateBtn.addEventListener("click", calculateBill)