import React, { Component } from "react";

export default class SearchMovie extends Component {

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search)
        }
    }

    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                                id="email_inline"
                                type="text"
                                className="validate"
                                placeholder="Search..."
                                value={this.state.search}
                                onChange={(e) => this.setState({ search: e.target.value })}
                                onKeyDown={this.handleKey}
                            />
                            <button className="btn search_btn"
                                onClick={() => this.props.searchMovie(this.state.search)}>
                                Search MOvies
                            </button>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span className="span-type">All</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span className="span-type">Movies</span>
                    </label>
                </div>  <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span className="span-type">Series</span>
                    </label>
                </div>
                </div>

            </>
        )
    }
}