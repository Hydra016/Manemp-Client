import React from 'react'

const Menu = ({ menuOpened }) => {
    console.log(menuOpened)
    return <div className={menuOpened ? 'show menu' : 'menu'}>Menu</div>
}

export default Menu
