function openGift() {


    let gift = document.getElementById("giftBox");


    gift.classList.add("openGift");



    setTimeout(() => {


        document.getElementById("giftScreen").style.display = "none";


        document.getElementById("birthdayCard")
        .classList.remove("hidden");


        startCelebration();


    }, 1200);



}





function startCelebration() {


    setInterval(() => {

        createEffect("✨");

    }, 700);



    setInterval(() => {

        createEffect("🌸");

    }, 1200);



    setInterval(() => {

        createEffect("❤️");

    }, 1500);



    fireworks();


}







function createEffect(symbol) {


    let item = document.createElement("div");


    item.innerHTML = symbol;


    item.className = "floating";


    item.style.left =
    Math.random() * 90 + "vw";


    item.style.fontSize =
    (20 + Math.random() * 25) + "px";



    item.style.animationDuration =
    (4 + Math.random() * 5) + "s";



    document.body.appendChild(item);



    setTimeout(() => {


        item.remove();


    },9000);


}







function fireworks() {


    for(let i = 0; i < 25; i++) {


        setTimeout(() => {


            createEffect("🎆");


        }, i * 80);


    }


}
