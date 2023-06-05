import React, { Component } from "react"
import Movies from "../components/Movies"
import Loading from "../components/Loading"
import SearchMovie from "../components/SearchMovie"

export default class Main extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=29c6a4f8&s=Terminator')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovie = (str,type = 'all')=> {
        this.setState({Loading: true})
        fetch(`http://www.omdbapi.com/?apikey=29c6a4f8&s=${str}&${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, Loading: false}))
    }

    render() {
        return (
            <>
                <SearchMovie searchMovie={this.searchMovie} />
                {
                    this.state.movies.length > 0 ?
                        <div className="container moviess">
                            <Movies movies={this.state.movies} />
                        </div>
                        :
                        <Loading />
                }

            </>
        )
    }
}