import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const MovieItem = (props) => {

    const navigate = useNavigate();
    
    const navigateUrl = '/movie?movieId=' + props.movie.id;
    const handleOnclick =()=>{
        navigate(navigateUrl)
    }
    const movie = props.movie;
    const imagePath='https://image.tmdb.org/t/p/w500' + movie.posterPath;
    return (
        <section className="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-4__30Uoi index-module_l-3__MjWvb">
            <div className="CommonItem_wrapper__1FbHi Home_courseItem__aIeZ4">
                <a className="CommonItem_thumb__ew8Jj CommonItem_has-link__VLLrX" title={movie.title} target="_self"
                style={{backgroundImage:`url(${imagePath})`}}
                 >
                    <button className="Button_btn__RW1e2 CommonItem_cta-btn__OK+oX" onClick={handleOnclick}>See Detail</button></a>
                <h3 className="CommonItem_title__EpYrE"><a target="_self"
                    >{movie.title}</a></h3>
                <div className="price">
                    <span className="CourseItem_main-price__6zPwS">Vote {movie.voteAverage}</span>
                </div>
            </div>
        </section>
    )
}

export default MovieItem;