import React from 'react'
import './styles.css'
import { deleteShifts } from '../../../features/shiftSlice';
import { useDispatch } from 'react-redux';

const DeleteShift = ({data, disabled, setDeletableShifts}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteShifts({
      shifts: data
    }))
  }

  return (
    <button  onClick={handleClick} className='clear-btn save-btn'>Delete</button>
  )
}

export default DeleteShift