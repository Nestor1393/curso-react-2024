import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/usersSlice";
import { use } from "react";


const Users = () => {

const usuarios = useSelector((state) => state.users);
const dispatch = useDispatch();

useEffect(() => {
 axios.get("https://jsonplaceholder.typicode.com/users").
    then(res => {
        console.log(res);
        dispatch(fetchUsers(res.data));
    }).
    catch(err => console.error(err));
}, [dispatch]);


  return (
    <>
      <h2>Lista de usuarios JSON placeholder</h2>
      <ul>
        <li>usuario</li>
        {
            usuarios.map((user) => (<li key={user.id}>{user.name}</li>))
        }
      </ul>
    </>
  )
}

export default Users
