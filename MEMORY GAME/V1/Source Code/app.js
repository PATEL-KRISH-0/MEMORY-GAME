let arraryOfEmogi = ["😇", "😇", "🤣", "🤣", "😁", "😁", "😳", "😳", "😍", "😍", "😎", "😎", "🥰", "🥰", "😋", "😋"]
const cards = document.querySelector(".cards");
const resetEle = document.querySelector(".reset");

const swapArray = (arr) => {
    for (let index = arr.length - 1; index >= 1; index--) {
        const random = Math.floor(Math.random() * (index - 1));
        let temp = arr[index];
        arr[index] = arr[random];
        arr[random] = temp;
    }
    return arr;
}

const inserElemens = (arr) => {
    cards.innerHTML = ""
    arr.forEach(ele => {
        cards.insertAdjacentHTML("beforeend",
            `<div class="card">
    
                <div class="frant">
        
                 </div>

                <div class="back">
                    ${ele}
                </div>

        </div>`)
    });

}


const reset = () => {

    let arr = swapArray(arraryOfEmogi);
    inserElemens(arr);
    const card = document.querySelectorAll(".card");

    card.forEach(ele => {

        ele.addEventListener("click", () => {

            ele.classList.add("open", "sel");
            let sel = document.querySelectorAll(".sel");

            if (sel.length === 2) {
                arr = Array.from(sel);

                if (arr[0].innerHTML == arr[1].innerHTML) {
                    arr[0].classList.remove("sel");
                    arr[1].classList.remove("sel");
                }
                else {
                    setTimeout(() => {
                        arr[0].classList.remove("open", "sel");
                        arr[1].classList.remove("open", "sel");
                    }, 800);
                }
                
                if (document.querySelectorAll(".open").length == card.length) {
                    setTimeout(() => {
                        alert("You Win the Game");
                        reset();
                    }, 1500);
                }
            }

        })

    })

}

resetEle.addEventListener("click", () => {
    reset();
})

reset();