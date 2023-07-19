import React from "react"

const SimilarMovies = (props) => {
    console.log('s')
    console.log(props.similarMovies)
    return (
        <>
            <div data-v-530f2aa4="" className="detail-infos__subheading">
                <h2 data-v-530f2aa4="" className="detail-infos__subheading--label"> People who liked {props.movieTitle} also liked </h2>
            </div>
            <div data-v-0697c5c5 className="hidden-horizontal-scrollbar__items horizontal-title-list">
                {props.similarMovies?.map(movie => {


                    return (

                        <div data-v-0697c5c5="" className="horizontal-title-list__item"><a data-v-0697c5c5=""
                            href="https://www.justwatch.com/ph/movie/avatar-2" className="">
                            <div data-v-0697c5c5="">
                                <div data-v-0697c5c5="" className="title-poster">
                                    <svg data-v-32656d44="" aria-hidden="true"
                                        focusable="false" data-prefix="fas" data-icon="bookmark" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                        className="svg-inline--fa fa-bookmark fa-w-12 title-poster-ribbon">
                                        <path data-v-32656d44="" fill="currentColor"
                                            d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
                                            className=""></path>
                                    </svg>
                                    <img data-v-2f4bad04="" className="picture-comp title-poster__image" src={`https://image.tmdb.org/t/p/original${movie.posterPath}`} />



                                </div>
                            </div>
                        </a></div>

                    )
                })}
            </div>
        </>
    )
}

export default SimilarMovies