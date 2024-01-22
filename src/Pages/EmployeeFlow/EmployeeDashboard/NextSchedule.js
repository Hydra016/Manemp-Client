import React from 'react'
import ScheduleTimingSwitch from './ScheduleTimingSwitch'

const NextSchedule = () => {
  return (
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
  )
}

export default NextSchedule