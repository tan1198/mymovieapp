import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="App_sidebarWrap__3LwsB">
      <div className="Sidebar_wrapper__kUJFm" id="sidebar">

        <ul className="Sidebar_list__HnCzM">
          <li>
            <NavLink to={'/'}
            className={({ isActive }) =>
            isActive ? 'nav-active' : undefined}>
            <a aria-current="page" className="Sidebar_itemBtn__Q78b7 Sidebar_active__uvck8">
              <img
                src="https://img.icons8.com/sf-black-filled/64/000000/home-page.png"
                alt="home"/>
              <span>Home</span>
            </a>
            </NavLink>
            
          </li>
          
          <li>
            <NavLink to={'/toprated'}
            className={({ isActive }) =>
            isActive ? 'nav-active' : undefined}
            >
            <a className="Sidebar_itemBtn__Q78b7" >
            <img
                src="https://img.icons8.com/?size=2x&id=48710&format=png"
                alt="top Rated"/>
              <span>Top Rated</span>

            </a>
            </NavLink>
           
          </li>
          <li>
            <NavLink to={'/upcoming'}
            className={({ isActive }) =>
            isActive ? 'nav-active' : undefined}
            >
            <a className="Sidebar_itemBtn__Q78b7" >
            <img
                src="https://img.icons8.com/?size=2x&id=A9xqAkgkFIW9&format=png"
                alt="Upcoming"/>
              <span>Upcoming</span>
            </a>
            </NavLink>
            
          </li>
          <li>
            <NavLink to={'/popular'}
            className={({ isActive }) =>
            isActive ? 'nav-active' : undefined}>
            <a className="Sidebar_itemBtn__Q78b7" >
            <img
                src="https://img.icons8.com/?size=2x&id=er279jFX2Yuq&format=png"
                alt="Popular"/>
              <span>Popular</span>
            </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/nowplaying'}
            className={({ isActive }) =>
            isActive ? 'nav-active' : undefined}>
            <a className="Sidebar_itemBtn__Q78b7" >
            <img
                src="https://img.icons8.com/?size=2x&id=99cTBfGlewZU&format=png"
                alt="Now Playing"/>
              <span>Now Playing</span>
            </a>
            </NavLink>

          </li>
        
        </ul>
      </div>

    </div>
  )
}


export default SideBar;