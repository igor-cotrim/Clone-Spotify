import React from 'react';

import './styles.css'
import {loginUrl} from '../../config/spotify'

function Login() {
  return(
    <div className="login">
      <img src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png" 
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;