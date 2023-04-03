


    const billStringEl = document.querySelector(".billString");
    const calculateBtn = document.querySelector(".calculateBtn");
    const billTotalEl = document.querySelector(".billTotal")


        function calculateBill () {

            const billStringVal = billStringEl.value

            let totalBill = 0;
            const billItems = billStringVal.split(",")

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