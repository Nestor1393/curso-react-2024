import React, {memo, useMemo} from 'react'

const ContadorHijo = ({contador, sumar, restar}) => {

  console.log("hijo");

  /* let superNumero = 0;

  for (let index = 0; index < 10000; index++) {
    superNumero = superNumero+1; 
  } */

    const superNumero = useMemo(() => {

      let numero = 0;
      for (let index = 0; index < 10000; index++) {
        numero = numero+1; 
      }

      return numero;
      
    }, []);

  return (
    <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
      <h2>Contador hijo</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
      <h3>{contador}</h3>
    </div>
  )
}

export default memo(ContadorHijo)
