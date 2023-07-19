import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FireBase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const NavBar = (props) => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.userInfo)
    const navigateUrl = '/search?query=' + query;
    const handleOnchangeInput = (e) => {
        setQuery(e.target.value)
    }
    const handleOnClick = (e) => {
        if (e.keyCode == 13) {
            navigate(navigateUrl)
            setQuery('')
        }
        return;
    }
    const handleLogOutOnClick = () => {
        signOut(auth).then(() => {
            toast.success('Logout successfully')
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }
    const handleLogInOnClick = () => {
        navigate('/login')
    }
const handleMyInfoOnClick=()=>{
    navigate('/myinfo') 
}
    return (
        <div className="NavBar_wrapper__4m3K5" id="header">
            <div className="NavBar_logo__Rgo-5"><a ><img
                src="https://cdn-icons-png.flaticon.com/512/686/686458.png"
                alt="" /></a>

            </div>
            <div className="NavBar_body__4Yhth d-flex-center">
                <div>
                    <div className="Search_wrapper__Bwvae d-flex-center" aria-expanded="false">
                        <div className="Search_searchIcon__-23JY"></div><input onKeyDown={handleOnClick} onChange={handleOnchangeInput} value={query} className="Search_input__GnMba" spellCheck="false"
                            placeholder="Tìm kiếm phim ..." />
                    </div>
                </div>
            </div>
            <div className="NavBar_actions__nSNzo">
                <div id="navbar-actions-portal"></div>
                <div><button className="NavBar_myLearn__vCvEB" aria-expanded="false" onClick={handleMyInfoOnClick}>My Movie</button></div>
                {user ?
                    <div>
                        <div className="NavBar_actionBtn__tzSZd" id="notification-button" aria-expanded="false">
                            <img
                                className="svg-inline--fa fa-bell NavBar_action-icon__l9MxX" src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png "
                                alt="logout"
                                onClick={handleLogOutOnClick}
                            >
                            </img>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="NavBar_actionBtn__tzSZd" id="notification-button" aria-expanded="false">
                            <img
                                className="svg-inline--fa fa-bell NavBar_action-icon__l9MxX" src="https://cdn-icons-png.flaticon.com/512/3580/3580168.png"
                                alt="log in"
                                onClick={handleLogInOnClick}
                            >
                            </img>
                        </div>
                    </div>
                }


                <div className="NavBar_avatar-wrapper__j7jMj" aria-expanded="false">
                    <div className="FallbackAvatar_avatar__gmj3S" style={{ fontSize: '3.2px' }} >
                        <img className="NavBar_avatar__OG7ib"
                            src=""
                            alt="Tân Trần">
                        </img></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;