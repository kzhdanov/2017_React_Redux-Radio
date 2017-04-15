import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

import './admin.css';

export default function AlbumCardNewEdit(
  { album, handleChange, resetCard, handleChangeCB, saveCard, editCard }) { 
  const hasAl = album.id ? true : false;

  return (
    <div className='albums__card'>
      { hasAl ? 
        <div style={{width: '272px'}}>{ album.BandName } 
          <IconButton className='close'>
            <NavigationClose onClick={ () => resetCard() } />
          </IconButton>
        </div> : 
        <div>Новый альбом</div>
      }

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
        type="number"
        hintText=""
        floatingLabelText="Год издания альбома"
        value={ album.Year ? album.Year : '' }
        onChange={ (e) => handleChange(e) }
      />
      <TextField
        name="WeekNumber"
        type="number"
        hintText="не указан - текущая неделя"
        floatingLabelText="Номер недели"
        value={ album.WeekNumber ? album.WeekNumber : '' }
        onChange={ (e) => handleChange(e) }
      />
      <Checkbox
        name="IsVisible"
        checkedIcon={<Visibility />}
        uncheckedIcon={<VisibilityOff />}
        label=''
        title={ Boolean(album.IsVisible) ? 'отображается' : 'скрыт' }
        checked={ Boolean(album.IsVisible) }
        onCheck={ (e) => handleChangeCB(e) }
      />
      { hasAl ? 
        <RaisedButton label="Изменить" primary={true} className='edit__card-btn' 
          onClick={ () => editCard() }
        /> :
        <RaisedButton label="Создать" primary={true} className='edit__card-btn' 
          onClick={ () => saveCard() }
        />
      }
    </div>
  );
}

AlbumCardNewEdit.propTypes = {
  album: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  handleChangeCB: React.PropTypes.func.isRequired,
  resetCard: React.PropTypes.func.isRequired,
  editCard: React.PropTypes.func.isRequired,
}
