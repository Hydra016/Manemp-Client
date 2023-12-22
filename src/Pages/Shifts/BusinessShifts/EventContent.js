import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EventContent = ({ arg }) => {
    const [employee, setEmployee] = useState(null)

    const getSingleEmployee = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/employee', data)
            setEmployee(response.data.employee)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getSingleEmployee({ empId: arg.employeeId })
    }, [])

    return (
        <div>
            {arg && employee && (
                <div>
                    <p>{employee && employee.givenName}</p>
                    <p>{arg.hours} hours</p>
                    <p>{arg.amount} €</p>
                </div>
            )}
        </div>
    )
}

export default EventContent
