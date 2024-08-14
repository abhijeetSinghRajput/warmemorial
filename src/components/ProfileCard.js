import React from 'react'

function ProfileCard(props) {
    const {
        name,
        rank,
        branch,
        serviceNumber,
        datePeriod,
        src,
    } = props;
    return (
        <div className="profile-card">
            <div className="close"></div>
            <div className="profile-img">
                <div className="img-box">
                    <img src={src}/>
                </div>
                <div className="badge"></div>
            </div>
            <h3>{name}</h3>
            <p className="text-muted">({datePeriod})</p>
            <div className="details">
                <div>
                    <span>rank</span>
                    <strong>{rank}</strong>
                </div>
                <div>
                    <span>service no</span>
                    <strong>{serviceNumber}</strong>
                </div>
                <div>
                    <span>branch</span>
                    <strong>{branch}</strong>
                </div>
            </div>
            <button>read more</button>
        </div>
    )
}

export default ProfileCard