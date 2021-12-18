import React from 'react'
import "./SideBar.css"
import {Avatar} from "@mui/material"

function SideBar() {

    const recentItem=(topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
         
            <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt =""/>
            <Avatar className="sidebar_avater"></Avatar>
            <h2>Anisha</h2>
            <h4>anisha.basak@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber" >2.543</p>

            </div>
            <div className="sidebar_stats">
              <p> Views on post</p>
                <p className="sidebar_statNumber">2444 </p>
             </div>

             <div className="sidebar_bottom">
            
                <p >Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
             </div>



        </div>
    )
}

export default SideBar
