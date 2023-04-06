//GET

const listaProductos= ()=>{
    fetch("http://localhost:3000/Platillo").then(respuesta=>respuesta.json()).catch(error=> console.log(error))
}



//POST

const crearProductos=(Name, PicUrl)=>{
    fetch("http://localhost:3000/Platillo", {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            Name,
            PicUrl
        }).then(respuesta=>{
            if(respuesta.ok){
                return respuesta.body
            }
        })
    } )
    throw new Error("No pudimos crear tu producto")
}


export const productosServicios={
    listaProductos,
    crearProductos
}