
import React, { useReducer } from 'react';

// Reducer para manejar el estado del formulario
const reducer = (state, action) => {
  switch (action.type) {
    case 'update_field':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }, // Limpia errores al actualizar
      };
    case 'set_error':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case 'reset':
      return action.initialState; // Reinicia todo el estado
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
};

const initialState = {
  name: '',
  email: '',
  errors: {
    name: '',
    email: '',
  },
};

const FormExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    let valid = true;

    // Validación del nombre
    if (!state.name.trim()) {
      dispatch({
        type: 'set_error',
        field: 'name',
        error: 'El nombre es obligatorio',
      });
      valid = false;
    }

    // Validación del correo
    if (!state.email.includes('@')) {
      dispatch({
        type: 'set_error',
        field: 'email',
        error: 'El correo debe ser válido',
      });
      valid = false;
    }

    if (valid) {
      alert('Formulario enviado con éxito');
    }
  };

  return (
    <div>
      <h2>Formulario con useReducer</h2>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: 'update_field',
                field: 'name',
                value: e.target.value,
              })
            }
          />
        </label>
        {state.errors.name && <p style={{ color: 'red' }}>{state.errors.name}</p>}
      </div>
      <div>
        <label>
          Correo:
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: 'update_field',
                field: 'email',
                value: e.target.value,
              })
            }
          />
        </label>
        {state.errors.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
      </div>
      <button onClick={handleSubmit}>Enviar</button>
      <button onClick={() => dispatch({ type: 'reset', initialState })}>Reiniciar</button>
    </div>
  );
};

export default FormExample;

