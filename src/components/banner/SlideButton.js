
import {  useSwiper } from "swiper/react";

export const NextButton = () => {
    const swiper = useSwiper();
    const nextSlide = () => {
        console.log(swiper)
        swiper.slideNext()
    }


    return (
       <button onClick={nextSlide}>
next
       </button>
    )
}

export const PrevButton = () => {

    const swiper = useSwiper();
    
    const prevSlide = () => {
        swiper.slideNext()
    }

    return (
        <button onClick={prevSlide}>
prev
       </button>
    )
}