import React, { useEffect } from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineHandRaised } from 'react-icons/hi2'
import { IoTimeOutline } from 'react-icons/io5'
import { CiShop } from 'react-icons/ci'
import ScheduleContainer from './ScheduleContainer'
import SalaryGraph from './SalaryGraph'
import HoursGraph from './HoursGraph'
import { getEmployeeShifts, getMonthlyHours, getSalaries } from '../../../features/shiftSlice'

const EmployeeDashboard = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { currentSelectedShop } = useSelector((state) => state.common);
    const { shifts, isLoading, currentSalary, previousSalary, monthlyHours } = useSelector((state) => state.shifts)
    
    useEffect(() => {
        dispatch(getEmployeeShifts({ employeeId: user.googleId, shopId: currentSelectedShop }))
        dispatch(getSalaries({ empId: user.googleId, shopId: currentSelectedShop }))
        dispatch(getMonthlyHours({ empId: user.googleId, shopId: currentSelectedShop }))
    }, [currentSelectedShop]);

    useEffect(() => {
        dispatch(getSalaries({ empId: user.googleId, shopId: currentSelectedShop }))
        dispatch(getMonthlyHours({ empId: user.googleId, shopId: currentSelectedShop }))
    }, [])

    const d = new Date();
    const currentMonth = d.getMonth();

        return (
        <div>
            <h1 className="dashboard-heading">Welcome {user && user.givenName}</h1>
            <div className="main-container">
                <div className="first-container">
                    <div className="main-boxes-container">
                        <div className="box">
                            <p className="box-heading">Salary</p>
                            <p className="box-text">{currentSalary}€</p>
                            <a href="#" className="box-heading box-btn raise-btn">
                                request raise <HiOutlineHandRaised className="box-link" />
                            </a>
                        </div>
                        <div className="box">
                            <p className="box-heading">Hours</p>
                            <p className="box-text">{monthlyHours.length > 0 && monthlyHours[currentMonth]}</p>
                            <a href="#" className="box-heading box-btn shifts-btn">
                                View shifts <IoTimeOutline className="box-link" />
                            </a>
                        </div>
                        <div className="box">
                            <p className="box-heading">My Employers</p>
                            <p className="box-text">{user && user.shops.length}</p>
                            <a href="#" className="box-heading box-btn requests-btn">
                                View requests <CiShop className="box-link" />
                            </a>
                        </div>
                    </div>
                    <div className="graphs-container">
                        <div className="salary-calculation-container">
                            <SalaryGraph currentSalary={currentSalary} previousSalary={previousSalary}/>
                        </div>
                        <div className="salary-calculation-container">
                            <HoursGraph monthlyHours={monthlyHours} />
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
