import React, { useState, useEffect } from "react";
import BannerItem from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { fetchMoviesAction } from "../MovieAction";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const BannerList = () => {
    const type = 'top_rated';
    const [moviesList, setMovieList] = useState([])

    useEffect(() => {
        //let moviesFecthed = [];
        const fetchMovies = async () => {
            let { moviesFecthed, totalPage } = await fetchMoviesAction(type, 1);

            setMovieList(moviesFecthed)
        };
        fetchMovies();
    }, [])
  
    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            loop='true'>
            {
                moviesList.map(movie => <SwiperSlide>
                    <BannerItem movie={movie} />
                </SwiperSlide>)
            }


        </Swiper>

    )
}

export default BannerList;