addEventListener("DOMContentLoaded", ()=>{
    const ws = new Worker("ws.js");
    ws.postMessage({action: "Cargar"});
    ws.addEventListener("message", (e)=>{
        const json = e.data;
        document.querySelector("nav").insertAdjacentHTML("afterbegin", json.logo);
        document.querySelector("nav ul").insertAdjacentHTML("beforeend", json.menu);
        document.querySelector("nav div").insertAdjacentHTML("beforeend", json.avance);
        document.querySelector(".content").insertAdjacentHTML("beforeend", json.content);
        document.querySelector(".hero").insertAdjacentHTML("beforeend", json.img);
        document.querySelector(".hero").setAttribute("style", `background-image: url(${json.fondo})`);
    })
})