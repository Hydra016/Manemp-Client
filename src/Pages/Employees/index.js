import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployeesByBusiness } from '../../features/userSlice'
import SingleEmployee from './SingleEmployee'
import './styles.css';
import LoadingScreen from '../../components/shared/LoadingScreen';

const Employees = () => {
    const dispatch = useDispatch()
    const { user, employees, isLoading } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getEmployeesByBusiness({ shopId: user.googleId }))
    }, [])

    return (
        <div className='businessEmployees-container requests-container'>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <table className="request-table">
                  <thead>
                    <tr>
                        <td className="table-cell">Employee</td>
                        <td className="table-cell">Name</td>
                        <td className="table-cell">Joined date</td>
                        <td className="table-cell">Current salary</td>
                    </tr>
                </thead>
                <tbody>
                {
                  employees && employees.map((employee) => {
                    return <SingleEmployee key={employee._id} employee={employee} shopId={user.googleId} />
                })
                }
                </tbody>
                </table>
            )}
        </div>
    )
}

export default Employees
