import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { HiOutlineHandRaised } from 'react-icons/hi2'
import { IoTimeOutline } from 'react-icons/io5'
import { CiShop } from 'react-icons/ci'
import ScheduleContainer from './ScheduleContainer'
import SalaryGraph from './SalaryGraph'
import HoursGraph from './HoursGraph'

const EmployeeDashboard = () => {
    const { user } = useSelector((state) => state.user)

    return (
        <div>
            <h1 className="dashboard-heading">Welcome {user && user.givenName}</h1>
            <div className="main-container">
                <div className="first-container">
                    <div className="main-boxes-container">
                        <div className="box">
                            <p className="box-heading">Salary</p>
                            <p className="box-text">600€</p>
                            <a href="#" className="box-heading box-btn raise-btn">
                                request raise <HiOutlineHandRaised className="box-link" />
                            </a>
                        </div>
                        <div className="box">
                            <p className="box-heading">Hours</p>
                            <p className="box-text">160</p>
                            <a href="#" className="box-heading box-btn shifts-btn">
                                View shifts <IoTimeOutline className="box-link" />
                            </a>
                        </div>
                        <div className="box">
                            <p className="box-heading">My Employers</p>
                            <p className="box-text">2</p>
                            <a href="#" className="box-heading box-btn requests-btn">
                                View requests <CiShop className="box-link" />
                            </a>
                        </div>
                    </div>
                    <div className="graphs-container">
                        <div className="salary-calculation-container">
                            <SalaryGraph />
                        </div>
                        <div className="salary-calculation-container">
                            <HoursGraph />
                        </div>
                    </div>
                </div>
                <div className="second-container">
                    <ScheduleContainer />
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard
