import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const SalaryGraph = () => {
    const oldSalary = 1000 
    const newSalary = 1300 

    const percentageIncrease = ((newSalary - oldSalary) / oldSalary) * 100

    const data = [
        { month: 'Previous', salary: oldSalary },
        { month: 'Current', salary: newSalary }
    ]

    return (
        <div className="efficency-graph-container">
            <h1 className="box-heading">Salary</h1>
            <p className="efficiency-graph-text">+{percentageIncrease.toFixed(1)}%</p>
            <p className="efficiency-graph-text-sub">salary increase</p>
            <div>
                {' '}
                <LineChart width={350} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="salary" stroke="#8884d8" name="Salary (Euros)" />
                </LineChart>
            </div>
        </div>
    )
}

export default SalaryGraph
