import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { OpenSalaryModal } from '../../features/commonSlice'

const SingleEmployee = ({ employee, shopId }) => {
    const dispatch = useDispatch()

    return (
        <tr className="singleRequest">
            <td className="table-cell">
                <div className="retract-link user-info">
                    <img className="request-img" src={employee.picture} />
                </div>
            </td>
            <td className="table-cell">{employee.givenName}</td>
            <td className="table-cell">
                {employee.shops.find((shop) => shop.shopId === shopId).dateJoined.slice(0, 10)}
            </td>
            <td className="table-cell">
                {employee.salary ? (
                    `${employee.salary} €`
                ) : (
                    <Link onClick={() => dispatch(OpenSalaryModal({ status: true, employeeId: employee._id }))}>
                        set salary
                    </Link>
                )}
            </td>
        </tr>
    )
}

export default SingleEmployee
