import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_EMPLOYEE_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation'
import SidebarLink from './SidebarLink'
import { HiLogout } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/userSlice'
import { useMobileDetection } from '../../hooks/useMobile'
import SidebarLogoutlink from './SidebarLogoutlink'

const Sidebar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);

    return (
        <div className='sidebar'>
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span>Manemp { user.role === 'business' ? 'Business' : null }</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {user.role === 'business' ? DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                )) : DASHBOARD_SIDEBAR_EMPLOYEE_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <SidebarLogoutlink />
            </div>
        </div>
    )
}

export default Sidebar
