import {useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
        ...form, [name]: value
    })
  };

  const handleBlur = (e) => {
    //handleChange(e);
    setErrors(validateForm(form));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0){
      alert("Enviando formulario");
      setLoading(true);
      helpHttp().post("https://formsubmit.co/ajax/munozjimeneznestor@gmail.com", {
        body: form,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }

      }).then((res) => {
        setLoading(false);
        setResponse(true);
        setForm(initialForm);
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      })
      
    }else{
      return;
    }
    
  };

  return {
    form,
    loading,
    errors,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }

}
