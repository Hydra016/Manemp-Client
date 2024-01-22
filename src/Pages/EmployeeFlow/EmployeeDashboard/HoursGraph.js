import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const HoursGraph = ({ monthlyHours }) => {
    const data = [
        { month: 'January', hours: monthlyHours[0] },
        { month: 'February', hours: monthlyHours[1] },
        { month: 'March', hours: monthlyHours[2] },
        { month: 'April', hours: monthlyHours[3] },
        { month: 'May', hours: monthlyHours[4] },
        { month: 'June', hours: monthlyHours[5] },
        { month: 'July', hours: monthlyHours[6] },
        { month: 'August', hours: monthlyHours[7] },
        { month: 'Spetember', hours: monthlyHours[8] },
        { month: 'October', hours: monthlyHours[9] },
        { month: 'November', hours: monthlyHours[10] },
        { month: 'December', hours: monthlyHours[11] }
    ]

    const d = new Date();
    const currentMonth = d.getMonth() + 1;

    const avgHours = (monthlyHours.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / currentMonth).toFixed(1);

    return (
        <div className="efficency-graph-container">
            <h2 className="box-heading">Monthly Hours Worked</h2>
            <p className="efficiency-graph-text">{avgHours}</p>
            <p className="efficiency-graph-text-sub">Average hours</p>
            <BarChart width={350} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hours" fill="#8884d8" name="Hours Worked" />
            </BarChart>
        </div>
    )
}

export default HoursGraph
