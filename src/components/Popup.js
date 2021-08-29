import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating} <span>IMDb</span></p>
                <div className="plot">
                    <img src={selected.Poster} alt={ selected.Title}/>
                    <p>{selected.Plot}</p>
                </div>
                <div className="more-infos">
                    <p>Production: {selected.Production}</p>
                    <p>Cast: {selected.Actors}</p>
                    <p>Director: {selected.Director}</p>
                    <p>Genre: {selected.Genre}</p>
                    <p>Date Released: {selected.Released}</p>
                    <p>Runtime: {selected.Runtime}</p>
                </div>
                <button className="close" onClick={closePopup}>Return</button>
            </div>
        </section>
    )
}

export default Popup;