import React from 'react'
import { useForm } from '../hooks/useForm';
import Loader from '../components/Loader';
import Message from './Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",

};

const styles = {
    fontWeight: 'bold',
    color: '#dc3545'
}



const validationsForm  = (form) => {
  
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
                    
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo nombre es requerido";
    }else if(!regexName.test(form.name.trim())) {
      errors.name = "El campo nombre solo acepta letras y espacios";

    }

    if(!form.email.trim()){
        errors.email = "El campo email es requerido";
    }else if(!regexEmail.test(form.email.trim())) {
      errors.email = "El campo email es incorrecto";

    }

    if(!form.subject.trim()){
        errors.subject = "El campo asunto es requerido";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo comentarios es requerido";
    }else if(!regexComments.test(form.comments.trim())) {
      errors.comments = "El campo comentarios no debe exceder los 255 caracteres";

    }

    return errors;
};

const ContactForm = () => {

     const {
        form,
        loading,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit} = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='escribe tu nombre' onBlur={handleBlur} onChange={(e) => handleChange(e)} value={form.name} required/>
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input type='email' name='email' placeholder='escribe tu email' onBlur={handleBlur} onChange={handleChange} value={form.email} required/>
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input type='text' name='subject' placeholder='Asunto' onBlur={handleBlur} onChange={handleChange} value={form.subject} required/>
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea name="comments" cols="50 " rows="5" onBlur={handleBlur} onChange={handleChange} value={form.comments} required></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader/>}
      {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
    </div>
  )
}

export default ContactForm
