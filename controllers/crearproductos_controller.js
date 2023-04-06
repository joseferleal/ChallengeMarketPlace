import { productosServicios } from "../servicios/productos_servicios"

const form=document.querySelector("[data-form]")
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const url=document.querySelector("[data-url]").value
    const nombre=document.querySelector("[data-nombre]").value

    productosServicios.crearProductos(url, nombre)
    .then(respuesta=>{
        window.location.href="../screens/index.html"
        console.log(respuesta)
    }).catch(error=>{
        console.log(error)
    })
})