let config = async()=>{
    let peticion = await fetch("config.json");
    let json = await peticion.json();
    const html = {
        fondo: `${json.fondo}`,
        menu: ``,
        avance: ``
    };
    html.logo =  //html
        `
            <img src="${json.img}" class="logo">
        `;
    json.menu.forEach((data, id) => {
        html.menu += //html
            `
                <li>
                    <a href="${data.href}">${data.value}</a>
                </li>
            `;
    });
    json.avance.forEach((data, id) => {
        if(id==0){
            html.avance += //html
            `
                <a href="${data.href}" class="login-btn">${data.value}</a>
            `;
        }else{
            html.avance += //html
            `
                <a href="${data.href}" class="btn">${data.value}</a>
            `;
        }
        
    });
    html.content = //html
    `
        <h1 class="anim">${json.content.titulo}</h1>
        <p class="anim">${json.content.contenido}</p>
    `;
    json.content.boton.forEach((data, id) => {
        html.content += //html
            `
                <a href="${data.href}" class="btn anim">${data.value}</a>
            `;
    });
    html.img = //html
        `
            <img src="${json.content.img}" class="feature-img anim">
        `;
    return html;
}
addEventListener("message", async(e)=>{
    if(e.data.action == "Cargar"){
       postMessage(await config());
    }
})