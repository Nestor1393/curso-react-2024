import React from 'react'
import SongLyric from './SongLyric';
import SongArtist from './SongArtist';

const SongDetails = ({search, lyric, bio}) => {
  return (
    <div>
      <h2>Detalles</h2>
      
      <SongArtist/>
      <SongLyric/>
    </div>
  )
}

export default SongDetails
