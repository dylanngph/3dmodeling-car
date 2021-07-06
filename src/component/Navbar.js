import { Box } from '@material-ui/core'
import React from 'react'
import styled from '@emotion/styled'

const Menu = styled(Box)`
    width: 100px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 102px;
    left: 95px;
    opacity: 1;
    transition: 1.5s;
    text-transform: uppercase;
    .menu-item{
        color: #f8f3de;
        cursor: pointer;
        opacity: 1;
        font-weight: 700;
        font-size: 15.5px;
        display: block;
    }
    .item-1{
        animation-delay: 0ms;
        animation: fadeIn1 1.2s ease-out;
    }
    .item-2{
        animation-delay: 200ms;
        margin-top: 43px;
        animation: fadeIn2 1.2s forwards;
    }
    .item-3{
        animation-delay: 400ms;
        margin-top: 50px;
        animation: fadeIn3 1.2s forwards;
    }
    .item-2, .item-3{
        max-height: 0;
        overflow: hidden;
    }
`
const Toolbar = styled(Box)`
    position: absolute;
    top: 91px;
    right: 100px;
    width: 30px;
    height: 30px;
    color: #f8f3de;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    .toolbar-line{
        width: 33px;
        height: 3px;
        background: #f8f3de;
        border-radius: 2px;
        margin-bottom: 6px;
    }
`
export const Navbar = () => {
    return (
        <>
            <Menu>
                <div className="menu-item item-1">
                    Stories
                </div>
                <div className="menu-item item-2">
                    Service
                </div>
                <div className="menu-item item-3">
                    Support
                </div>
            </Menu>
            <Toolbar>
                <div className="toolbar-line" />
                <div className="toolbar-line" />
            </Toolbar>
        </>
    )
}
