import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const LandingContent = () => {
    return (
        <div className="landing-content">
            <div className="content">
                From Shifts to Stock, Master it All with <span>ManEmp</span>
                <p>
                    "Your ultimate solution for seamless retail management. Effortlessly schedule employees and manage
                    inventory with ease. Simplify your retail operations today!"
                </p>
                <button className="nav-btn">
                    Discover more <HiArrowRight className="landing-btn-icon" />
                </button>
            </div>
            <div className="image">
                <img src="./landing-img.png" />
            </div>
        </div>
    )
}

export default LandingContent
