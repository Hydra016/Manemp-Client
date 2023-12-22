import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useDispatch, useSelector } from 'react-redux'
import { getShifts } from '../../../features/shiftSlice'
import EventContent from './EventContent'
import './styles.css';

const BusinessShift = () => {
    const { shifts } = useSelector((state) => state.shifts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getShifts())
    }, [])

    const eventContent = (arg) => {
        return (
            <>
                <p>{arg.timeText}</p>
                <EventContent arg={arg.event._def.extendedProps} />
            </>
        )
    }

    return (
        <div className='businessShiftContainer'>
            <div className='employeeSelectContainer'>
                <select>
                    <option>hello</option>
                    <option>hello</option>
                    <option>hello</option>
                </select>
            </div>
            <FullCalendar
                plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
                headerToolbar={{
                    left: 'prev next',
                    center: 'title',
                    right: 'timeGridWeek'
                }}
                nowIndicator={true}
                editable={false}
                droppable={true}
                selectable={true}
                selectMirror={true}
                events={shifts}
                eventContent={eventContent}
            />
        </div>
    )
}

export default BusinessShift
