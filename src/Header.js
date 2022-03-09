import React from 'react'
import "./Header.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum'


function Header() {
    return (

        <div className="header">
            <IconButton>
                <AccountBoxIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img className="header__logo" src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png" alt="not found" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>

        </div> 

    )
}

export default Header