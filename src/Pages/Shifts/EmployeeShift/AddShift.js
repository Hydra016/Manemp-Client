import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import SaveModal from '../../../components/Modals/SaveModal'
import { useDispatch, useSelector } from 'react-redux'
import { getShifts } from '../../../features/shiftSlice'
import ClearShifts from './ClearShifts'
import { useMobileDetection } from '../../../hooks/useMobile'
import DeleteShift from './DeleteShift'

const AddShift = () => {
    const { shifts: myShifts } = useSelector((state) => state.shifts)
    const dispatch = useDispatch()
    const [shifts, setShifts] = useState([])
    const [events, setEvents] = useState([])
    const [disabled, setDisabled] = useState(true)
    const isMobile = useMobileDetection()
    const [deletableShifts, setDeletableShifts] = useState([])

    useEffect(() => {
        dispatch(getShifts())
        sessionStorage.getItem('shifts') && setShifts(JSON.parse(sessionStorage.getItem('shifts')))
    }, [])

    const handleSelect = (info) => {
        const start = info.start
        const end = info.end

        const hours = Math.abs((end - start) / (60 * 60 * 1000))

        const day = start.getDay()

        const selectedShiftData = {
            start,
            end,
            hours,
            day
        }

        setShifts((prevShifts) => [...prevShifts, selectedShiftData])
        sessionStorage.setItem('shifts', JSON.stringify([...shifts, selectedShiftData]))
    }

    const eventContent = (arg) => {
        return (
            <div>
                <p>{arg.timeText}</p>
                {arg && <p>{arg.event._def.extendedProps.hours} hours</p>}
            </div>
        )
    }
    useEffect(() => {
        shifts && shifts.length > 0 && setDisabled(false)
        const finalEvents = shifts && shifts.concat(myShifts)
        setEvents(finalEvents)
    }, [myShifts, shifts])

    const handleEventClick = (info) => {
        const clickedShift = info.event
        const eventElement = info.el

        eventElement.classList.toggle('red-event')

        info.jsEvent.preventDefault()
        const shiftId = clickedShift._def.extendedProps._id
        const isShiftSelected = deletableShifts.includes(shiftId)

        if (isShiftSelected) {
            setDeletableShifts(deletableShifts.filter((id) => id !== shiftId))
        } else {
            setDeletableShifts([...deletableShifts, shiftId])
        }
    }

    return (
        <div className="scheduler-container">
            <div>
                <SaveModal disabled={disabled} data={shifts} setShifts={setShifts} />
                <ClearShifts disabled={disabled} data={shifts} setShifts={setShifts} />
                <DeleteShift disabled={disabled} data={deletableShifts} setDeletableShifts={setDeletableShifts} />
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
                select={handleSelect}
                events={events}
                eventContent={eventContent}
                initialEvents={events && events}
                eventClick={handleEventClick}
            />
        </div>
    )
}

export default AddShift
