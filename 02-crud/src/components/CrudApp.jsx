import React, {useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andromeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },

    

];

const CrudApp = () => {

const [db, setDb] = useState(initialDb);
const [dataToEdit, setDataToEdit] = useState(null);

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
      <h2>Crud App</h2>
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

export default CrudApp;
