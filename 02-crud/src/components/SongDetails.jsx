import React from 'react'
import SongLyric from './SongLyric';
import SongArtist from './SongArtist';
import Message from './Message';

const SongDetails = ({search, lyric, bio}) => {

  //if(!lyric || !bio) return null;

  return (
    <div>
      {lyric?.error || lyric?.name === "AbortError" || lyric?.err? <Message msg={`Error: no existe la canción '<em>${search.song}</em>'`} bgColor={"#dc3545"} /> : <SongLyric title={search.song} lyrics={lyric?.lyrics}/>}
      {!bio?.artists || bio === null? <Message msg={`Error: no existe el interprete '<em>${search.artist}</em>'`} bgColor={"#dc3545"}/> : <SongArtist artist={bio.artists[0]}/>}
        
    </div>
  )
}

export default SongDetails
