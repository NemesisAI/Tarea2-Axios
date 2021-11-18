

const botonBuscar = document.querySelector("#botonBuscar");

const listarUsuaios = (event)=>{
    

    event.preventDefault();
    let albumId = document.querySelector("#comboUsuario").value;
    let uri = "https://jsonplaceholder.typicode.com/users/" + albumId +"/albums";

    axios.get(uri)
        .then(respuesta => {
            let contenidoTabla = document.querySelector("#contenidoTabla");
            contenidoTabla.innerHTML = "";
            respuesta.data.forEach( user =>{
  
                contenidoTabla.innerHTML += "<tr><td>"+ "<input type='checkbox' checked>" + "</td>"
                                        + "<td> "+ user.id  +"</td>"
                                        + "<td> "+ user.userId  +"</td>"
                                        + "<td> "+ user.title  +"</td>"
                                        + "</tr>"
            })
        })
        .catch(error => console.log(error));
}
botonBuscar.addEventListener("click", listarUsuaios);

const llenarCombo =(event) =>{

    let comboUsuario = document.querySelector("#comboUsuario");

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => {
        respuesta.data.forEach( user =>{
            comboUsuario.innerHTML += "<option value="+ user.id + ">" + user.name +"</option>";
        } );
    })
    .catch(error => console.log(error));
}
window.addEventListener("load",llenarCombo)