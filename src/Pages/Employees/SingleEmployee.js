import React from 'react'
import { Link } from 'react-router-dom'

const SingleEmployee = ({ employee, shopId }) => {
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
            <td className="table-cell">{employee.salary ? employee.salary : <Link>set salary</Link>}</td>
        </tr>
    )
}

export default SingleEmployee
