import NavBar from "../bars/NavBar"
import SideBar from "../bars/SideBar"
import MainContent from "../content/MainContent"

import BannerList from "../banner/BannerList"
const MainLayout = (props)=>{
    return(
<>
      <NavBar></NavBar>
      <div className='App_withSidebar__8lwIi'>
        <SideBar></SideBar>

        <MainContent>
            {props.children}
        </MainContent>
      </div>
    </>

    )
}

export default MainLayout