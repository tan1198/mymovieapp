import React, { useEffect, useState } from "react";
import MovieItem from "../../components/content/MovieItem";
import { fetchMoviesAction } from "../../components/MovieAction";
import MainLayout from "../../components/layout/MainLayout";
import Pagination from "../../components/pagingnation/Pagination";
import { useLocation } from "react-router-dom";
const NowPlayingMovie = (props) => {
    const type = 'now_playing';
    const title = 'Now Playing '
    const [moviesList, setMovieList] = useState([])
    const [page, setPage] = useState(1);
    const [totaPage,setTotalPage]=useState(0)
    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }
    const curRout=useLocation()
    console.log(curRout)
    useEffect(() => {
        //let moviesFecthed = [];
        const fetchMovies = async () => {
            let {moviesFecthed,totalPage} = await fetchMoviesAction(type, page);

            setMovieList(moviesFecthed)
            setTotalPage(totalPage)
        };
        fetchMovies();
    }, [page])
    return (
        <MainLayout>
            <div className="ScrollList_vertical__hG0sb">
                <div className="ScrollList_heading-wrap__58LQx">
                    <h2 className="ScrollList_heading__BYEXH"><span rel="noreferrer" target="_self">{title}</span>
                    </h2>
                </div>
                <div className="ScrollList_body__iMN-l">
                    <section className="index-module_row__-AHgh">
                        {moviesList.map(movie => (
                            <MovieItem
                                key={movie.id}
                                movie={movie} />
                        )
                        )}
                    </section>
                </div>
            </div>
            <Pagination
                handlePageClick={handlePageClick}
                pageCount={totaPage}
            >
            </Pagination>
        </MainLayout>
    )
}

export default NowPlayingMovie;