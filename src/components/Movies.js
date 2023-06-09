import React from "react";
import Movie from "./Movie";
import Header from "../laoyut/Header";
export default function Movies(props) {
    const { movies } = props;
    return (
        <>
            <div className="movies">
                {
                    movies.map(movie => (
                        <Movie key={movie.imdbID} {...movie} />
                    ))
                }

            </div>
        </>
    )
}