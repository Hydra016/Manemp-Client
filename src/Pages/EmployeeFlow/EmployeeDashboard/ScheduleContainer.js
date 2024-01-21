import React from 'react'
import ScheduleTimingSwitch from './ScheduleTimingSwitch'

const ScheduleContainer = () => {
    return (
        <div>
            <div className="upcoming-shifts-container">
                <h1 className="box-heading">Upcoming shifts</h1>
                <div className="upcoming-shifts">
                    <div className="upcoming-shift">
                        <p>Kebab Eats</p>
                        <p>22 January 2024</p>
                        <p>Monday 9:30 - 19:00</p>
                    </div>
                    <div className="upcoming-shift">
                        <p>Kebab Eats</p>
                        <p>24 January 2024</p>
                        <p>Wednesday 9:30 - 19:00</p>
                    </div>
                </div>
            </div>
            <div className="next-schedule-container">
                <h1 className="box-heading">Next Week Schedule</h1>
                <div className="next-schedule-timing-container">
                    <div className='next-schedule-timing'>
                    <p>Monday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Tuesday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Wednesday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Thursday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Friday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Saturday</p>
                    <ScheduleTimingSwitch />
                    </div>
                    <div className='next-schedule-timing'>
                    <p>Sunday</p>
                    <ScheduleTimingSwitch />
                    </div>
                </div>
                <button className='schedule-save'>save</button>
            </div>
        </div>
    )
}

export default ScheduleContainer
