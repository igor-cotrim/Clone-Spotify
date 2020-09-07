import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import {Grid, Slider} from '@material-ui/core'

import './styles.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img 
          className="footer__albumLogo"
          src="https://i.pinimg.com/originals/18/46/ce/1846ce457b2e40927f40872f4917bfea.jpg" 
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;