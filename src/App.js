import logo from './logo.svg';
import './App.css';
import ContainerSong from './Feature/Song';
import React, {Component} from 'react';
import ButtonSearch from './Feature/ButtonSearch';

function App() {
  const client_id= process.env.REACT_APP_SPOTIFY_ID;
    return(
    <div className='App'>
      <ButtonSearch />
      <ContainerSong/>
      <button className='btnSelect'>Select</button>
    </div>
  );
}

export default App;




// return (
  //   <div className="App">
  //     <h1>Spotify Playlist</h1>
      
  //       <div className="form-group">
  //         <input type="text" name="title" required />
  //         <button id="btnSearch" type="submit">
  //           Search
  //         </button>
  //       </div>
      
  //     <img
  //       src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
  //       className="image"
  //       alt=""
  //     /> <br />
  //     <button id='btnSelect' type='submit'>Select</button>
  //   </div>
  // );