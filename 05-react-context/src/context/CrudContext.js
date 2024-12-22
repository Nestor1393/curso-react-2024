import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({children}) => {  

    const [db, setDb] = useState(null);
const [dataToEdit, setDataToEdit] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

let api = helpHttp();
let url = "http://localhost:5000/santos";

useEffect(() => {

  setLoading(true);
  helpHttp().get(url).then(res=> {
    //console.log(res);
    if(!res.err){
      setDb(res);
      setError(null)
    }else{
      setDb(null);
      setError(res);
    }
    setLoading(false);
  });
}, [url])


const createData = (data) => {
  data.id = (Date.now()).toString();
  let options = {body:data, headers:{"content-type":"application/json"},};
  
  api.post(url, options).then(res => {
    //console.log(res);
    if(!res.err){
      setDb([...db, res]);
    }else{
      setError(res);
    }
  })
}

const updateData = (data) => {
    //let index = db.findIndex(knight => knight.id === data.id);
    //let nuevosDatos = db.map((knight, i) => i === index? data: knight);
    //setDb(nuevosDatos);

    //let newData = db.map((knight) => knight.id === data.id? data : knight);
    //setDb(newData);

    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    let options = {body:data, headers:{"Content-type":"application/json"} };
  
  api.put(endpoint, options).then(res => {
    console.log(res);
    if(!res.err){
      let newData = db.map((knight) => knight.id === data.id? data : knight);
      setDb(newData);
    }else{
      setError(res);
    }
  })


}


const deleteData = (id) => {

  let options = {headers:{"Content-type":"application/json"} };
  let isDelete = window.confirm(`¿Estás seguro de elimnar el registro con el id '${id}'?`);
  
  if(isDelete){
    let endpoint = `${url}/${id}`;
    api.del(endpoint, options).then(res => {
       
      if(!res.err){
        alert("Registro eliminado");
        let newData = db.filter(knight => knight.id !== id);
        setDb(newData);
      }else{
        alert("registro no eliminado");
        setError(res);
      } 
    })
  }else{
    return;
  }

}

    const data = {
        db,
        error,
        loading,
        createData,
        dataToEdit,
        setDataToEdit,
        updateData,
        deleteData
    };

    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}

export {CrudProvider};
export default CrudContext;