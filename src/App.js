import React, {useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-js'

import './App.css';
import Login from './components/Login/index'
import Player from './components/Player/index'
import {getTokenFromUrl} from './spotify'
import {useDataLayerValue} from './dataLayer'

const spotify = new SpotifyWebApi();

function App() {
  const [{ /*user*/ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('2uARDgoTe2zRuhFxNTaICG').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      })
    }

  }, [dispatch]);

  return (
    <div className="app">
      { token ? <Player spotify={spotify}/> : <Login />}
    </div>
  )
}

export default App;
