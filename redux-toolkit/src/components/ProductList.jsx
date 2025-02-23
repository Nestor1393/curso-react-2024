import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, deleteProduct, readProducts, updateProduct } from '../redux/productsSlice';

const ProductList = () => {

    const products = useSelector(state => state.products.data);
    const dispatch = useDispatch();

    const [newProductName, setNewProductName] = useState("");
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect (() => {

        axios.get("http://localhost:3001/products").then(res => { 
            //console.log(res);
            dispatch(readProducts(res.data));
        }).catch(err => {
            console.error(err);
        })
  
    }, [dispatch]);
    

    const handleCreateProduct = () => {
      if(newProductName){
        const newProduct = {id: Date.now(), name: newProductName};
        dispatch(createProduct(newProduct));

        axios.post("http://localhost:3001/products", newProduct)
        .then(() => {
            setNewProductName("");
        })
        .catch(err=> console.error(err));
      } 
    };
    
    const handleUpdateProduct = () => {
      if(editedProduct){
        const editProduct = {id: editedProduct.id, name: editedProduct.name};
        dispatch(updateProduct(editProduct));

        axios.put(`http://localhost:3001/products/${editedProduct.id}`, {
          name: editedProduct.name,
        }).then(() => {
          setEditedProduct(null);
        }).catch((err) => {
          console.error(err);
        })
      }
    };
    const handleDeleteProduct = (idProduct) => {
     const deleted = window.confirm(`¿Deseas eliminar el producto? ${idProduct}`);

     if(deleted){
        dispatch(deleteProduct(idProduct));

        axios.delete(`http://localhost:3001/products/${idProduct}`)
        .then((response) => {
          alert(`Producto eliminado: ${idProduct}`);
        })
        .catch((error) => {
          console.error(error);
        })
     }
    };
    

  return (
    <div>
      <h2>CRUD PRODUCTOS</h2>
      <h3>lista productos</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editedProduct?.id === product.id? (
              <div>
                <input type='text' value={editedProduct.name} 
                onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}/>
                <button onClick={handleUpdateProduct}>Actualizar</button>
              </div>
            ):(
              <div>
                <span>{product.name}</span>
                <button onClick={() => setEditedProduct(product)}>Editar</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
              </div>
            )}
            
            
          </li>
          ))}
      </ul>
      <aside>
        <input type='text' value={newProductName} onChange={(e) => setNewProductName(e.target.value)}/>
        <button onClick={handleCreateProduct}>Agregar producto</button>
      </aside>
    </div>
  )
}

export default ProductList
