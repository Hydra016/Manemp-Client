import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiMenuAlt1, HiSearch } from 'react-icons/hi'
import { openMenu, openSearchModal } from '../../features/commonSlice'
import { useMobileDetection } from '../../hooks/useMobile'
import { searchShop } from '../../features/shopSlice'

const Header = () => {
    const { user } = useSelector((state) => state.user)
    const { searchedShop } = useSelector((state) => state.shop)
    const dispatch = useDispatch()
    const isMobile = useMobileDetection()
    const [ data, setdata ] = useState({
        shopId: ''
    })

    return (
        <div className="header">
            {isMobile && (
                <button className='menuButton' onClick={() => dispatch(openMenu(true))}>
                    <HiMenuAlt1 />
                </button>
            )}
            <div className='header-sub'>
            <span>Welcome {user && user.role === 'business' ? user.shopName : user.givenName}</span>
            <span className='sub-text'>{ user.role === 'business' && `Shop id: ${user._id}`}</span>
            {user.role === 'employee' && <div className='employee-header-side'>
            <div className='employee-header-search'>
                <button onClick={() => {
                    dispatch(searchShop(data))
                    dispatch(openSearchModal(true))
                }
                }><HiSearch /></button>
                <input onChange={(e) => setdata({...data, shopId: e.target.value})} type='text' placeholder='Enter shop id' />
            </div>
            <img src={user && user.picture} className='user-img' />
            </div>}
            </div>
        </div>
    )
}

export default Header
