import SelectList from "./SelectList"
import { useState } from 'react';


const SelectsAnidados = () => {

    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const TOKEN = "5420d26f-d8cd-4e5c-9ade-b4cf15f1a57f";

  return (
    <div>
      <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) => {setState(e.target.value)}}/>
      {state && 
        <SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => {setTown(e.target.value)}}/>
      }
      {town &&
        <SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e) => {setSuburb(e.target.value)}}/>
      }   
      <pre>
        <code>{state} - {town} - {suburb}</code>
      </pre>
    </div>
  )
}

export default SelectsAnidados
