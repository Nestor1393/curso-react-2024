import React, {useState, useEffect} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';

const CrudApi = () => {

const [db, setDb] = useState([]);
const [dataToEdit, setDataToEdit] = useState(null);

let api = helpHttp();
let url = "http://localhost:5000/santos";

useEffect(() => {
  api.get(url).then(res=> {
    console.log(res);
  })
}, [])


const createData = (data) => {
  data.id = Date.now();
  setDb([...db, data ]);

}

const updateData = (data) => {
    //let index = db.findIndex(knight => knight.id === data.id);
    //let nuevosDatos = db.map((knight, i) => i === index? data: knight);
    //setDb(nuevosDatos);

    let newData = db.map((knight) => knight.id === data.id? data : knight);
    setDb(newData);


}

const deleteData = (id) => {
  let isDelete = window.confirm(`¿Estás seguro de elimnar el registro con el id '${id}'?`);
  
  if(isDelete){

    let newData = db.filter(knight => knight.id !== id);
    setDb(newData);

  }else{
    return;
  }

}

  return (
    <div>
      <h2>Crud Api</h2>
      <article className='grid-1-2'>
        <CrudForm 
        createData={createData} 
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}/>
        <CrudTable 
        data={db} 
        deleteData={deleteData} 
        setDataToEdit={setDataToEdit}/>
      </article>
    </div> 

  )
}

export default CrudApi;

