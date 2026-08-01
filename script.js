function openGift(){


let gift=document.getElementById("giftBox");


gift.classList.add("openGift");



setTimeout(()=>{


document.getElementById("giftScreen").style.display="none";


document.getElementById("birthdayCard")
.classList.remove("hidden");


startCelebration();



},1200);



}




function startCelebration(){


setInterval(()=>createEffect("❤️"),1200);

setInterval(()=>createEffect("🌸"),1800);

setInterval(()=>createEffect("✨"),1500);


}





function createEffect(symbol){


let item=document.createElement("div");


item.innerHTML=symbol;


item.className="floating";


item.style.left=Math.random()*90+"vw";


item.style.animationDuration=
(5+Math.random()*4)+"s";



document.body.appendChild(item);



setTimeout(()=>{


item.remove();


},9000);



}