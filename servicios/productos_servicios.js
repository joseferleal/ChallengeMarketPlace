//GET

const listaProductos= ()=>{
    fetch("http://localhost:3000/producto").then(respuesta=>respuesta.json()).catch(error=> console.log(error))
}



//POST

const crearProductos=(Name, PicUrl)=>{
    fetch("http://localhost:3000/producto", )
}


export const productosServicios={
    listaProductos
}