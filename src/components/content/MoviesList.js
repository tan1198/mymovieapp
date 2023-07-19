import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { fetchMoviesAction } from "../MovieAction";
import Pagination from "../pagingnation/Pagination";
import { Link } from "react-router-dom";

const MoviesList = ({ title, type, page=1,link }) => {
  const [moviesList, setMovieList] = useState([]);
  
  useEffect(() => {
    //let moviesFecthed = [];
    const fetchMovies = async () => {
      let {moviesFecthed} = await fetchMoviesAction(type, page);
     
        moviesFecthed = moviesFecthed.slice(0, 4);
      

      setMovieList(moviesFecthed)
    };
    fetchMovies();
  }, [page])

  return (
    <div className="ScrollList_vertical__hG0sb">
      <div className="ScrollList_heading-wrap__58LQx">
        <h2 className="ScrollList_heading__BYEXH"><span rel="noreferrer" target="_self">{title}</span>
        </h2>
        <Link to={link} className="ScrollList_view-all__MTYc1" rel="noreferrer" target="_self" >See All<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
        </Link>
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
  )
}



export default MoviesList;