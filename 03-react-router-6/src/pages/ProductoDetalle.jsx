import { useParams, useNavigate } from "react-router-dom"

export const ProductoDetalle = ({productos}) => {
     
   // let idProducto = useParams().id;

   const {id} = useParams();
   const producto = productos.find((producto) => producto.id.toString() === id);

   const navigate = useNavigate();

   function handleBack () {
        //navigate(-1);
        navigate('/productos');
   }
    
    return (
        <section>
            <h1>Detalle Producto</h1>

            {/* {productos.map((producto) => (
                
                 producto.id === Number(idProducto) && <p key={producto.id}> id:{producto.id} nombre: {producto.nombre} precio: {producto.precio}</p>
                
            ))} */}
            <h2>{producto.nombre}</h2>
            <h3>{producto.id}</h3>
            <h4>${producto.precio}</h4>
            <button onClick={handleBack}>Regresar</button>
        
        </section>
    )
}