import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiMenuAlt1, HiSearch, HiOutlineBell } from 'react-icons/hi'
import { openMenu, openSearchModal } from '../../features/commonSlice'
import { useMobileDetection } from '../../hooks/useMobile'
import { searchShop } from '../../features/shopSlice'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Header = () => {
    const { user } = useSelector((state) => state.user)
    const { searchedShop } = useSelector((state) => state.shop)
    const dispatch = useDispatch()
    const isMobile = useMobileDetection()
    const [ data, setdata ] = useState({
        shopId: ''
    })
    const [ showDropDown, setShowDropDown ] = useState(false)

    return (
        <div className="header">
            
            {showDropDown && <Dropdown user={user} />}

            {isMobile && (
                <button className='menuButton' onClick={() => dispatch(openMenu(true))}>
                    <HiMenuAlt1 />
                </button>
            )}
            <div className='header-sub'>
            <span className='header-navbar-heading'>Welcome {user && user.role === 'business' ? user.shopName : user.givenName}</span>
            <div className='header-secondary-container'>

            {user.role === 'employee' && <div className='employee-header-side'>
            <div className='employee-header-search'>
                <button onClick={() => {
                    dispatch(searchShop(data))
                    dispatch(openSearchModal(true))
                }
                }><HiSearch /></button>
                <input onChange={(e) => setdata({...data, shopId: e.target.value})} type='text' placeholder='Enter shop id' />
            </div>
            </div>}
            <div className='header-notsub'>
            <Link className='notification'>
            <HiOutlineBell />
            </Link>
            <button onClick={() => setShowDropDown(!showDropDown)}>
            <img src={user && user.picture} className='user-img' />
            </button>
            </div>
            </div>

            </div>
        </div>
    )
}

export default Header
