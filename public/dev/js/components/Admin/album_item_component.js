import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import classnames from 'classnames';

export default function AlbumItem({ album, current, editItem, deleteItem }) {
  return (
    <div style={{margin: '20px 20px 0 20px'}}>
      <div className={classnames('albums__item', { current: current })}> 
        <img style={{width: '250px', height: '250px'}} src={ '/TestCovers/' + album.ImgName.replace(/ /g,"%20") } alt="Album Cover" />
        
        <div style={{marginLeft: '20px'}}>
          <span>{ album.BandName }</span><br/>
          <span>{ album.AlbumName }</span><br/>
          <span>{ album.Genres }</span><br/>
          <span>{ album.Year }</span><br/>
          <Checkbox
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            label=''
            title={ Boolean(album.IsVisible) ? 'отображается' : 'скрыт' }
            checked={ Boolean(album.IsVisible) }
          />
          <br/>
          <RaisedButton label="Редактировать" 
            primary={true} style={{width: '200px', marginBottom: '10px'}}
            onClick={() => editItem(album.id)}
          /><br/>
          <RaisedButton label="Удалить" secondary={true} style={{width: '200px'}}
            onClick={() => deleteItem(album.id)}
          />
        </div>
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  album: React.PropTypes.object.isRequired,
  current: React.PropTypes.bool.isRequired,
  editItem: React.PropTypes.func.isRequired,
  deleteItem: React.PropTypes.func.isRequired
}
