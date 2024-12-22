import React, {useState, useEffect, useContext} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import CrudContext from '../context/CrudContext';

const CrudApi = () => {

  const {db, error, loading} = useContext(CrudContext);

  return (
    <div>
      <h2>Crud Api con CONTEXT API</h2>
      <article className='grid-1-2'>
        <CrudForm />

        {loading && <Loader/>}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}

        {db && (<CrudTable/>)}
      </article>
    </div> 
  )
}

export default CrudApi;

