import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequests } from '../../features/requestsSlice'
import SingleRequest from './SingleRequest'

const Requests = () => {
    const { requests, isLoading, employeeRequests } = useSelector((state) => state.request)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRequests({ userId: user.googleId }))
    }, [])

    return (
        <div>
            <span className="sub-heading">{requests && requests.length} Active Requests</span>
            <table className="request-table">
                <thead>
                    <tr>
                        <td className="table-cell">{user.role === 'business' ? 'Employee' : 'Business'}</td>
                        {user.role === 'employee' && <td className="table-cell">Business type</td>}
                        <td className="table-cell">Request Date</td>
                        <td className="table-cell">Status</td>
                        {user.role === 'business' && <td className="table-cell">Accept Offer</td>}
                        <td className="table-cell">{user.role === 'employee' ? 'Request Action' : 'Reject Offer'}</td>
                    </tr>
                </thead>
                <tbody>
                    {requests && requests.map(requestData => <SingleRequest requestData={requestData} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Requests
