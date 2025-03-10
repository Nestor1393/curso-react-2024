import React, {useState, useEffect, useReducer} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import { crudInitialState, curdReducer } from '../reducers/crudReducer';
import { createAction, deleteAction, noAction, readAllAction, TYPES, updateAction } from '../actions/crudActions';
import caballeros  from '../api/db.json';
import { useDispatch, useSelector } from 'react-redux';

const CrudApi = () => {

//const [db, setDb] = useState(null);
//const [state, dispatch] = useReducer(curdReducer,crudInitialState);
const state = useSelector(state => state.crud);
const dispatch = useDispatch();

const {db} = state;
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
      //setDb(res);
      dispatch(readAllAction(res));
      setError(null)
    }else{
      //setDb(null);
      dispatch(noAction());
      setError(res);
    }
    setLoading(false);
  });
}, [url, dispatch]);


const createData = (data) => {
  data.id = (Date.now()).toString();
  let options = {body:data, headers:{"content-type":"application/json"},};
  
  api.post(url, options).then(res => {
    //console.log(res);
    if(!res.err){
      //setDb([...db, res]);
      dispatch(createAction(res));
      
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
    //console.log(endpoint);

    let options = {body:data, headers:{"Content-type":"application/json"} };
  
  api.put(endpoint, options).then(res => {
    //console.log(res);
    if(!res.err){
      //let newData = db.map((knight) => knight.id === data.id? data : knight);
      //setDb(newData);
      dispatch(updateAction(res));
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
        //let newData = db.filter(knight => knight.id !== id);
        //setDb(newData);

        dispatch(deleteAction(id));
      }else{
        alert("registro no eliminado");
        setError(res);
      } 
    })
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

        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}

        {db && (<CrudTable 
        data={db} 
        deleteData={deleteData} 
        setDataToEdit={setDataToEdit}/>)}
      </article>
    </div> 

  )
}

export default CrudApi;

