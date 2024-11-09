import React from 'react'
import { useFetch } from '../hooks/useFetch';
import Loader  from '../components/Loader';
import Message from './Message';

const SelectList = ({title, url, handleChange}) => {
    const {data, error, loading} = useFetch(url);
    //console.log(data, error, loading);

     if(!data) return null;

     if(error){
        return (<Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>)
     }

    let id = `select-${title}`
    let label = title.charAt(0).toUpperCase() + title.slice(1);

    let options = data.response[title];
    //console.log(options);

  return (
    <>
    <label htmlFor={id}>{label}</label>
    {loading && <Loader/>}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((elemento) => <option key={elemento} value={elemento}>{elemento}</option>)} 
      </select>
    </>
  )
}

export default SelectList
