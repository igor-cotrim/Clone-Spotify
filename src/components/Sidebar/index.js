import React from 'react';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

import './styles.css'
import SidebarOption from '../SidebarOption/index'
import{useDataLayerValue} from '../../config/dataLayer'

function Sidebar() {
  const [{playlists}] = useDataLayerValue()

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo" 
        src="https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png" 
        alt=""
      />

      <SidebarOption Icon={HomeIcon} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />

      ))}
    </div>
  )
}

export default Sidebar;