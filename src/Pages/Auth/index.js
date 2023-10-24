import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singupUser, fetchUser } from '../../features/userSlice';
import { Navigate } from 'react-router-dom';

const Auth = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [data, setData] = useState({ 
        id: user._id,
        shopName: '',
        password: '',

    });

  return (
    <div className='flex flex-col'>
        <label>Name</label>
        <input type='text' onChange={(e) => setData({ ...data, shopName: e.target.value })} />
        <label>Password</label>
        <input type='text' onChange={(e) => setData({ ...data, password: e.target.value })} />
        <button onClick={() => dispatch(singupUser(data))}>Complete Setup</button>
        {
          user.shopName && <Navigate to="/"/>
        }
    </div>
  )
}

export default Auth