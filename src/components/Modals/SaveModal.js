import React, { useEffect } from 'react'
import './styles.css'
import { saveShifts } from '../../features/shiftSlice'
import { useDispatch, useSelector } from 'react-redux'

const SaveModal = ({data, disabled, setShifts}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    data.map(shift => {
      dispatch(saveShifts(shift))
    })
    sessionStorage.removeItem('shifts');
    setShifts([])
  }

  return (
    <button disabled={disabled} onClick={handleClick} className='save-btn'>Save</button>
  )
}

export default SaveModal