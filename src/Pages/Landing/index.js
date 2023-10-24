import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, fetchUser } from '../../features/userSlice'
import Navbar from './Navbar'
import './styles.css'
import Menu from './Menu'
import LandingContent from './LandingContent'
import { useMobileDetection } from '../../hooks/useMobile'

const Landing = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user)
    const [menuOpened, setMenuOpened] = useState(false)
    const dispatch = useDispatch()
    const isMobile = useMobileDetection()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <div className="landing">
            <div className={menuOpened && isMobile ? 'overlay' : 'hidden'} onClick={() => setMenuOpened(false)}></div>
            <Menu menuOpened={menuOpened} />
            <Navbar setMenuOpened={setMenuOpened} menuOpened={menuOpened} />
            <LandingContent />
        </div>
    )
}

export default Landing
