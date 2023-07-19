import React from "react";
import { fetchMovieDetail } from "../MovieAction";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import SimilarMovies from "./SimilarMovies";
import MovieWatch from "./MovieWatch";
import { userAction } from "../../store/user-slice";
import { useDispatch, useSelector } from "react-redux";

import { auth, db } from '../../FireBase'
import { doc, setDoc } from 'firebase/firestore'
import { toast } from "react-toastify";
const MovieDetail = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.userInfo)
    const watchList = useSelector((state) => state.user.WatchList)
    const movieId = searchParams.get('movieId');
    const [movie, setMovie] = useState({});
    const [casts, setCasts] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [trailerVideoId, setTrailerVideoId] = useState('');
    const [isWatching, SetIsWatching] = useState(false);
    console.log(user)

    useEffect(() => {
        const fetchMovies = async () => {
            let { trailerVideoId, movieFecthed, cast, similars } = await fetchMovieDetail(movieId);
            setMovie(movieFecthed);
            setCasts(cast);
            setSimilarMovies(similars);
            setTrailerVideoId(trailerVideoId);
            console.log(trailerVideoId)
        };
        fetchMovies();
    }, [movieId])
    const handleOnclick = () => {
        SetIsWatching(prevState => {
            return !prevState;
        })
        dispatch(userAction.addToHistoryList({ movie: movie, userEmail: user.email }))
    }
    const handleSaveOnclick = () => {
        if (user) {
            dispatch(userAction.addToWatchList({ movie: movie, userEmail: user.email }));
            toast.success('Saved movie!')
        }
        else {
            toast.warning('You must log in first')
        }
    }

    return (
        <>

            {!isWatching && (<MovieTrailer
                videoId={trailerVideoId}
                movieTitle={movie.title}
            />)}
            {isWatching && (<MovieWatch
                videoId={movieId}
                movieTitle={movie.title}
            />)}
            <div className="button-container">
                <button className={isWatching ? "Button_btn__RW1e2" : 'Button_btn__RW1e2 button-active'} onClick={handleOnclick}>Trailer</button>

                <button className={isWatching ? "Button_btn__RW1e2 button-active" : 'Button_btn__RW1e2 '} onClick={handleOnclick}>Watch Movie</button>
                <button className={isWatching ? "Button_btn__RW1e2" : 'Button_btn__RW1e2 button-active'} onClick={handleSaveOnclick}>Save</button>
            </div>

            <div className="jw-info-box jw-info-box--trailer-playing" data-v-8d9eb75c="" data-v-644848e0="" data-v-d7672432="">
                <div className="jw-info-box__container" data-v-8d9eb75c>

                    <div className="jw-info-box__container-sidebar" data-v-8d9eb75c>
                        <div className="title-sidebar">
                            <div className="hidden-sm visible-md visible-lg title-sidebar__desktop">
                                <div className="title-poster title-poster--no-radius-bottom">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="picture-comp title-poster__image" data-v-2f4bad04="">

                                    </img><span className="title-poster__provider"></span>
                                </div>
                            </div>

                        </div>
                        <div className="title-info title-info">
                            <div className="detail-infos">
                                <div className="detail-infos__subheading">
                                    <h3 className="detail-infos__subheading--label">Rating</h3>
                                </div>
                                <div className="detail-infos__value">
                                    <div>
                                        <div v-uib-tooltip="IMDB" className="jw-scoring-listing__rating"><a
                                            href="https://www.imdb.com/title/tt10366206/" target="_blank"
                                            rel="nofollow" className=""><img

                                                src="https://www.justwatch.com/appassets/img/imdb-logo.png" alt="IMDB" tooltip="IMDB" className=" lazyloaded" />
                                            {movie.vote_average}  </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-infos">
                                <div className="detail-infos__subheading">
                                    <h3 className="detail-infos__subheading--label">Genres</h3>
                                </div>

                                <div className="detail-infos__value"> {movie?.genres?.map(g => {
                                    return <> {g.name}</>
                                })}
                                </div>
                            </div>
                            <div className="detail-infos">
                                <div className="detail-infos__subheading">
                                    <h3 className="detail-infos__subheading--label">Runtime</h3>
                                </div>
                                <div className="detail-infos__value">{movie.runtime} min</div>
                            </div>
                            <div className="detail-infos">
                                <div className="detail-infos__subheading">
                                    <h3 className="detail-infos__subheading--label">Age rating</h3>
                                </div>
                                <div className="detail-infos__value">R18</div>
                            </div>

                        </div>
                    </div>
                    <div className="jw-info-box__container-content" data-v-8d9eb75c>
                        <div data-v-8d9eb75c data-v-7d3dc15c>
                            <div additionalcontexts="" className="title-block__container" data-v-644848e0="">
                                <div className="title-block">
                                    <div>
                                        <h1> {movie.title}</h1><span className="text-muted"> (2023) </span>
                                    </div>
                                </div>
                                <div className="title-block__share-button">
                                    <div className="">
                                        <div className="share-button"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                            className="svg-inline--fa fa-share-alt fa-w-14 fa-2x">
                                            <path fill="currentColor"
                                                d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
                                                className=""></path>
                                        </svg><small>Share</small></div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-45036d4d="" data-v-644848e0="">
                                <div className="detail-infos__subheading" data-v-45036d4d="">
                                    <h2 className="detail-infos__subheading--label" data-v-45036d4d="">Synopsis</h2>
                                </div>
                                <p className="text-wrap-pre-line mt-0" data-v-45036d4d=""><span style={{ whiteSpace: 'pre-line' }}
                                    data-v-45036d4d=""> {movie.overview}</span>
                                </p>
                            </div>
                            <div data-v-644848e0="">
                                <div className="detail-infos__subheading">
                                    <h2 className="detail-infos__subheading--label">{movie.title} - watch online: streaming, buy or
                                        rent</h2>
                                </div>
                                <p className="mt-0"><span>something... </span></p>
                            </div>
                            <MovieCast
                                casts={casts}
                            />
                            <SimilarMovies
                                similarMovies={similarMovies}
                                movieTitle={movie.title}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>


    );
}

export default MovieDetail