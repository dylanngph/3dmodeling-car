import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@material-ui/core'
import { ReactComponent as HomeIcon } from '../home-solid.svg'
import { ReactComponent as LeafIcon } from '../leaf-solid.svg'
import { ReactComponent as PlugInIcon } from '../plug-in.svg'

const ActionBox = styled(Box)`
    display:flex;
    position:absolute;
    bottom:86px;
    left:80px;
    align-items: flex-end;
`
const ActionTitle = styled(Box)`
    color: #fff;
    font-size:15px;
    font-weight: 700;
    text-transform:uppercase;
    line-height:1.8;
    animation: fadeIn1 1.2s forwards;
    .explore-btn{
        width: 120px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 4px solid hsla(0,0%,100%,.6);
        border-radius: 60px;
        color: #f8f3de;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
    }
`
const ButtonBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin-left:133px;
`
const ButtonItem = styled(Box)`
    width: 76px;
    height: 76px;
    border-radius: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid hsla(0,0%,100%,.3);
    color: #fff;
    margin-right: 26px;
    animation: fadeIn1 1.2s ease-out;
`
const BluePrint = styled(Box)`
    height: 155px;
    max-height: 155px;
    max-width: 300px;
    overflow: hidden;
    animation: drawing 1s ease-out;
    margin-left:200px;
`
export const Action = () => {
    return (
        <ActionBox>
            <ActionTitle>
                <p>
                    Keep The World <br />
                    Adventurous Forever
                </p>
                <div className="explore-btn">
                    Explore
                </div>
            </ActionTitle>
            <ButtonBox>
                <ButtonItem className="btn">
                    <HomeIcon width={30} height={30} />
                </ButtonItem>
                <ButtonItem className="btn">
                    <LeafIcon width={30} height={30} />
                </ButtonItem>
                <ButtonItem className="btn">
                    <PlugInIcon width={30} height={30} />
                </ButtonItem>
            </ButtonBox>
            <BluePrint>
                <img src="/car-blueprint-final.png" alt="BluePrint" />
            </BluePrint>
        </ActionBox>
    )
}
