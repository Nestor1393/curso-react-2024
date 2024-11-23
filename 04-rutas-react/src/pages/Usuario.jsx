import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const Usuario = () => {
    //let params = useParams();
    //console.log(params);
    const {username} = useParams();
  return (
    <div>
      <h3>Pefil del usuario <b>{username}</b></h3>
    </div>
  )
}

export default Usuario
