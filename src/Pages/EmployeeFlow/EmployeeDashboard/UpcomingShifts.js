import React from 'react'
import { LuExternalLink } from 'react-icons/lu'

const UpcomingShifts = () => {
    return (
        <div className="upcoming-shifts-container">
            <h1 className="box-heading">Upcoming shifts</h1>
            <div className="upcoming-shifts">
                <div className="upcoming-shift">
                    <p>Kebab Eats</p>
                    <p>22 January 2024</p>
                    <p>Monday 9:30 - 19:00</p>
                </div>
                <div className="upcoming-shift">
                    <p>Kebab Eats</p>
                    <p>24 January 2024</p>
                    <p>Wednesday 9:30 - 19:00</p>
                </div>
            </div>
            <a href="#" className="box-btn shifts-btn">
                View schedule <LuExternalLink className="box-link" />
            </a>
        </div>
    )
}

export default UpcomingShifts
