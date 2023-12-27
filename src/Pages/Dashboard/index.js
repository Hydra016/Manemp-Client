import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client';

const Dashboard = () => {
    const socket = io('http://localhost:5000')

    useEffect(() => {
        socket.on('new-operation', () => {
            console.log('changes')
        }) 
    }, [])

    return (
        <div>
            asd
            <Link to={'/add-shop'}>go to add</Link>
        </div>
    )
}

export default Dashboard
