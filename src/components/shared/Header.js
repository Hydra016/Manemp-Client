import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HiMenuAlt1 } from 'react-icons/hi'
import { openMenu } from '../../features/commonSlice'
import { useMobileDetection } from '../../hooks/useMobile'

const Header = () => {
    const { user } = useSelector((state) => state.user)
    const { menuOpened } = useSelector((state) => state.common)
    const dispatch = useDispatch()
    const isMobile = useMobileDetection()

    return (
        <div className="header">
            {isMobile && (
                <button className='menuButton' onClick={() => dispatch(openMenu(true))}>
                    <HiMenuAlt1 />
                </button>
            )}
            <span>Welcome {user && user.shopName}</span>
        </div>
    )
}

export default Header
