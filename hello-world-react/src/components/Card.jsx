import React from 'react'

export default function Card({ details }) {
    return (
    <div>
        <div className="card my-2 mx-2" style={{ width: '18rem' }}>
            <img src={details.picture?.medium} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{details.name?.first} {details.name?.last}</h5>
                <p className="card-text">{details.location?.city}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    );
}
