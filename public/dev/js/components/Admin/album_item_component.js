import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function AlbumCard({ album }) {
  return (
    <div style={{margin: '20px 20px 0 20px'}}>
      <div className='albums__item'> 
        <img style={{width: '200px'}} src={ '/TestCovers/' + album.ImgName.replace(/ /g,"%20") } alt="Album Cover" />
        
        <div style={{marginLeft: '20px'}}>
          <span>{ album.BandName }</span><br/>
          <span>{ album.AlbumName }</span><br/>
          <span>{ album.Genres }</span><br/>
          <span>{ album.Year }</span><br/><br/>
          <RaisedButton label="Редактировать" primary={true} style={{width: '200px', marginBottom: '10px'}}/><br/>
          <RaisedButton label="Удалить" secondary={true} style={{width: '200px'}}/>
        </div>
      </div>
    </div>
  );
}

AlbumCard.propTypes = {
  album: React.PropTypes.object.isRequired
}
