import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, aspernatur. Dolorem, iusto et dolore,enim blanditiis aliquid accusantium iste officia! Totam?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail