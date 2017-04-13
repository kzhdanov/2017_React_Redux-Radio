import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './admin.css';

export default function AlbumCardNewEdit({ album, handleChange }) { 
  const hasAl = album.BandName ? true : false;

  return (
    <div className='albums__card'>
      { hasAl ? <div>{ album.BandName }</div> : <div>Новый альбом</div>}
      <TextField
        name="BandName"
        hintText=""
        floatingLabelText="Название группы"
        value={ album.BandName ? album.BandName : '' }
        onChange={ (e) => handleChange(e) }
      />
      <TextField
        name="AlbumName"
        hintText=""
        floatingLabelText="Название альбома"
        value={ album.AlbumName ? album.AlbumName : '' }
        onChange={ (e) => handleChange(e) }
      />
      <TextField
        name="Genres"
        hintText=""
        floatingLabelText="Жанр"
        value={ album.Genres ? album.Genres : '' }
        onChange={ (e) => handleChange(e) }
      />
      <TextField
        name="ImgName"
        hintText=""
        floatingLabelText="Путь к картинке"
        value={ album.ImgName ? album.ImgName : '' }
        onChange={ (e) => handleChange(e) }
      />
      <TextField
        name="Year"
        hintText=""
        floatingLabelText="Год издания альбома"
        value={ album.Year ? album.Year : '' }
        onChange={ (e) => handleChange(e) }
      />
    </div>
  );
}

AlbumCardNewEdit.propTypes = {
  album: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired,
}
