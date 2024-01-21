import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const HoursGraph = () => {
    const data = [
        { month: 'January', hours: 160 },
        { month: 'February', hours: 200 },
        { month: 'March', hours: 120 },
        { month: 'April', hours: 170 },
        { month: 'May', hours: 160 },
        { month: 'June', hours: 210 },
        { month: 'July', hours: 206 },
        { month: 'August', hours: 175 },
        { month: 'Spetember', hours: 164 },
        { month: 'October', hours: 174 },
        { month: 'November', hours: 182 },
        { month: 'December', hours: 182 }
    ]

    return (
        <div className="efficency-graph-container">
            <h2 className="box-heading">Monthly Hours Worked</h2>
            <p className="efficiency-graph-text">165</p>
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
