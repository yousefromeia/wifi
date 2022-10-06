let btn = document.getElementById("btn");
let tit = document.querySelector(".tit");
let ull=document.querySelector("ul");

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        Offline()
    }
}

window.addEventListener("online",online);
window.addEventListener("offline",offline)

// online
function online(){
    tit.innerHTML="On Line ";
    tit.style.color="green";
    ull.classList.add("remove");
    btn.classList.add("remove");
}
// offline
function offline(){
    tit.innerHTML="Off Line";
    tit.style.color="black";
    ull.classList.remove("remove");
    btn.classList.remove("remove");
}
btn.onclick = function(){
    window.location.reload()
}
