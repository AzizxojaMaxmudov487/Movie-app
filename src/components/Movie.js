import React,{useState} from "react"

export default function Movie(props) {
    const {Title,Year,imdbID,Type,Poster} = props
    return (
        <>
            <div className="card " key={imdbID}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Poster} />
                </div>
                <div className="card-content">
                    <span className="card-title activator blue-text text-darken-4">{Title}<i className="material-icons left button">About Film</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About:<i className="material-icons right button2">Close</i></span>
                    <h4 className="text text1">Film Name: <span className="span-text">{Title}</span></h4>
                    <h4 className="text text1">Film Year: <span className="span-text">{Year}</span></h4>
                    <h4 className="text text1">Film Type: <span className="span-text">{Type.toUpperCase()}</span></h4>
                </div>
            </div>
        </>
    )
}