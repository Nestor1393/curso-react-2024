import { useParams, useNavigate } from "react-router-dom"

export const ServicioDetalle = ({servicios}) => {
     
   // let idservicio = useParams().id;

   const {id} = useParams();
   const servicio = servicios.find((servicio) => servicio.id.toString() === id);

   const navigate = useNavigate();

   function handleBack () {
        //navigate(-1);
        navigate('/servicios');
   }
    
    return (
        <section>
            <h1>Detalle servicio</h1>

            {/* {servicios.map((servicio) => (
                
                 servicio.id === Number(idservicio) && <p key={servicio.id}> id:{servicio.id} nombre: {servicio.nombre} precio: {servicio.precio}</p>
                
            ))} */}
            <h2>{servicio.nombre}</h2>
            <h3>{servicio.id}</h3>
            <h4>${servicio.precio}</h4>
            <button onClick={handleBack}>Regresar</button>
        
        </section>
    )
}