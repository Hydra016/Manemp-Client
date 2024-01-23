import React, { useEffect } from 'react'
import { LuExternalLink } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingShifts } from '../../../features/scheduleSlice'
import UpcomingShift from './UpcomingShift'

const UpcomingShifts = () => {
    const { upcomingShifts } = useSelector((state) => state.schedule)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpcomingShifts({ empId: user.googleId }))
    }, [])

    return (
        <div className="upcoming-shifts-container">
            <h1 className="box-heading">Upcoming shifts</h1>
            <div className="upcoming-shifts">
                {upcomingShifts && upcomingShifts.map(shift => {
                    return <UpcomingShift shift={shift} />
                })}
            </div>
            <a href="#" className="box-btn shifts-btn">
                View schedule <LuExternalLink className="box-link" />
            </a>
        </div>
    )
}

export default UpcomingShifts
