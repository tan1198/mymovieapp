import React, { useEffect, useState } from "react";
import MovieItem from "../../components/content/MovieItem";
import {  fetchMoviesSearch } from "../../components/MovieAction";
import MainLayout from "../../components/layout/MainLayout";
import Pagination from "../../components/pagingnation/Pagination";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchPage=(props)=>{
    const title = 'Search Results';
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [moviesList, setMovieList] = useState([])
    const [page, setPage] = useState(1);
    const [totaPage,setTotalPage]=useState(0)
    const handlePageClick = (e) => {
        setPage(e.selected + 1)
    }
    useEffect(() => {
        //let moviesFecthed = [];
        const fetchMovies = async () => {
            let {moviesFecthed,totalPage} = await fetchMoviesSearch(query, page);

            setMovieList(moviesFecthed)
            setTotalPage(totalPage)
        };
        fetchMovies();
    }, [page,query])
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
export default SearchPage;