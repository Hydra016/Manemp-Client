import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiMenuAlt1, HiOutlineBell } from 'react-icons/hi'
import { openMenu, openSearchModal } from '../../features/commonSlice'
import { useMobileDetection } from '../../hooks/useMobile'
import { searchShop } from '../../features/shopSlice'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { FiChevronDown } from 'react-icons/fi'
import { CiSearch } from 'react-icons/ci'
import { LuMessageSquare } from "react-icons/lu";

const Header = () => {
    const { user } = useSelector((state) => state.user)
    const { searchedShop } = useSelector((state) => state.shop)
    const dispatch = useDispatch()
    const isMobile = useMobileDetection()
    const [data, setdata] = useState({
        shopId: ''
    })
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className="header">
            {showDropDown && <Dropdown user={user} />}

            {isMobile && (
                <button className="menuButton" onClick={() => dispatch(openMenu(true))}>
                    <HiMenuAlt1 />
                </button>
            )}
            <div className="header-sub">
                {/* <span className='header-navbar-heading'>Welcome {user && user.role === 'business' ? user.shopName : user.givenName}</span> */}
                {user.role === 'employee' && (
                    <div className="employee-header-side">
                        <div className="employee-header-search">
                            <input
                                onChange={(e) => setdata({ ...data, shopId: e.target.value })}
                                type="text"
                                placeholder="Enter shop id"
                            />
                            <button
                                onClick={() => {
                                    dispatch(searchShop(data))
                                    dispatch(openSearchModal(true))
                                }}
                            >
                                <CiSearch fill="#94a3b8" />
                            </button>
                        </div>
                    </div>
                )}
                <div className="header-secondary-container">
                    <div className="header-notsub">
                        <Link className="notification">
                            <HiOutlineBell color="#94a3b8" />
                        </Link>
                        <Link className="notification">
                            <LuMessageSquare color="#94a3b8" />
                        </Link>
                        <img src={user && user.picture} className="user-img" />
                        <button onClick={() => setShowDropDown(!showDropDown)}>
                            <div className="header-name">
                                <span className="header-navbar-heading">
                                    {user && user.role === 'business' ? user.shopName : user.givenName}
                                </span>
                                <FiChevronDown className="header-down-icon" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
