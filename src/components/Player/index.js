import React from 'react';

import './styles.css'
import  Sidebar from '../Sidebar/index'
import  Body from '../Body/index'
import  Footer from '../Footer/index'

function Player({spotify}) {
  return(
    <div className="player">
      <div className="player__body">
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>

      <Footer/>
    </div>
  )
}

export default Player;