import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt=""/>
                <span>IN</span>
            </div>
            <div className="header__middle">
                <form >
                <input type="text" placeholder=""Search/>
                <button type="submit" className="header__iconBox">
                    <SearchIcon />
                </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <VideoCallIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar className="header__avatar"/>
            </div>
            
        </div>
    )
}

export default Header
