import styled from '@emotion/styled'
import { Box } from '@material-ui/core'
import React from 'react'

const TitleOneBox = styled(Box)`
    color:#fff;
    font-size:80px;
    font-weight:700;
    position:absolute;
    top:94px;
    left:420px;
    .title-1, .title-2{
        width: 100%;
        overflow: hidden;
        color: #fff;
        display: block;
        max-height: 0;
    }
    .title-1{
        animation: fadeIn4 1.2s forwards;
    }
    .title-2{
        margin-top: -5px;
        animation: fadeIn5 1.2s forwards;
        animation-delay: .2s;
    }
`
export const Title1 = () => {
    return (
        <TitleOneBox>
            <div className="title-1">
                Electric
            </div>
            <div className="title-2">
                Adventure
            </div>
        </TitleOneBox>
    )
}
