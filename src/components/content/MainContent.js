import React from "react";
const MainContent = (props)=>{
    return (<div className="App_withSidebarContent__o4VlQ">
    <section className="index-module_grid__1q71E index-module_fullWidth__3X-6x" style={{maxWidth: '1920px'}}>
      {props.children}
      </section>
      </div>)
}

export default MainContent;