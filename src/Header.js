import React, { Component } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export class Header extends Component {
    render() {
        return (
            <div className='header'>

              <div className="header__left">
                <img src= "https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1634614581~hmac=74c1bb6e4fb95abd93ed7c538fa9b8dd"
                 alt =""  />
              </div>
              <div className="header_search">
                  <SearchIcon />
                  <input type="text"></input>
              </div>
              <div className="header_right"></div>
              <HeaderOption Icon={HomeIcon} title="Home"/>
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
              <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
              <HeaderOption Icon ={ChatIcon} title="Messaging"/>  
              <HeaderOption Icon ={NotificationsIcon} title="Notification"/>
              <HeaderOption avater="https://findicons.com/files/icons/2839/social_media_avatars_icon_set/1024/avatar_linkedin.png"
              title="me"></HeaderOption>
            </div>    
           
        )
    }
}

export default Header
