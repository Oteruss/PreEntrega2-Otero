const productos = [
    {id:"1", nombre:"Mini", precio: 300, img: "../img/Mini.png", idCat:"empresarial"},
    {id:"2", nombre:"Chico", precio: 500, img: "../img/Chico.png", idCat:"empresarial"},
    {id:"3", nombre:"Mediano", precio: 700, img: "../img/Mediano.png", idCat:"empresarial"},
    {id:"4", nombre:"Grande", precio: 1200, img: "../img/Grande.png", idCat:"personal"},
    {id:"5", nombre:"X-grande", precio: 1300, img: "../img/X-grande.png", idCat:"personal"},
    {id:"6", nombre:"Plus", precio: 1500, img: "../img/Plus.png", idCat:"personal"},
    {id:"7", nombre:"Super", precio: 2200, img: "../img/Super.png", idCat:"personal"},
    {id:"8", nombre:"Mega", precio: 2700, img: "../img/Mega.png", idCat:"empresarial"},
]

export const getProductos = () => {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1000)
    })
}