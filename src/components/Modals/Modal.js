import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../features/commonSlice';
import { logoutUser } from '../../features/userSlice';

const Modal = ({ isOpen }) => {
    const { modelOpened } = useSelector(state => state.common)
    const dispatch = useDispatch()

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Are you sure you want to logout?</h2>
        </div>
        <div className="modal-body">
          <p>Once you logout you can no longer access anything from Manemp</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
          <button onClick={() => dispatch(openModal(false))}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
