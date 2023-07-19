
import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";

const BannerItem = (props) => {
    const movie = props.movie;
    const navigate = useNavigate();
    
    const navigateUrl = '/movie?movieId=' + props.movie.id;
    const handleOnclick =()=>{
        navigate(navigateUrl)
    }
    const url = "https://image.tmdb.org/t/p/original" + movie.backdropImagePath;
    return (
        <>
        
            
            <img onClick={handleOnclick} className="banner-img" width='100%' src={url}></img>
            
        </>
    )
}

export default BannerItem