import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SongTableRow = ({handleDeleteSong, id, el}) => {
  //console.log(el);
  let {bio, search} = el;
  let avatar = bio.artists[0].strArtistThumb;

  let avatarStyle = {
    width: "auto",
    height: "40px"
  }

  let history = useHistory();

  return (
    <tr>
      <td><img style={avatarStyle} src={avatar} alt={search.artist}></img></td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={()=> history.push(`/${id}`) }>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default SongTableRow
