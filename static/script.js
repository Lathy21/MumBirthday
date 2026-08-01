function openGift() {

    let gift = document.getElementById("giftBox");

    gift.classList.add("openGift");


    setTimeout(() => {

        document.getElementById("giftScreen").style.display = "none";

        document
        .getElementById("birthdayCard")
        .classList.remove("hidden");


        startCelebration();


    }, 1200);

}





function startCelebration() {


    setInterval(() => {

        createEffect("✨");

    }, 500);



    setInterval(() => {

        createEffect("🌸");

    }, 900);



    setInterval(() => {

        createEffect("❤️");

    }, 1200);



    createFireworks();


}






function createEffect(symbol) {


    let effect = document.createElement("div");


    effect.className = "floating";


    effect.innerHTML = symbol;


    effect.style.left =
    Math.random() * 95 + "vw";


    effect.style.fontSize =
    (20 + Math.random() * 35) + "px";



    effect.style.animationDuration =
    (4 + Math.random() * 5) + "s";



    document.body.appendChild(effect);



    setTimeout(() => {

        effect.remove();

    },9000);


}






function createFireworks() {


    let symbols = ["🎆","✨","🎉"];


    for(let i = 0; i < 30; i++) {


        setTimeout(() => {


            createEffect(
            symbols[Math.floor(Math.random()*symbols.length)]
            );


        }, i * 100);


    }


}
