import styled from '@emotion/styled'
import { Box } from '@material-ui/core'
import React from 'react'

const TitleTwoBox = styled(Box)`
    color:#fff;
    font-size:80px;
    font-weight:700;
    position:absolute;
    top:90px;
    left:420px;
`
export const Title2 = () => {
    return (
        <TitleTwoBox>
            <div className="title-1">
                Explore the
            </div>
            <div className="title-2">
                places you love
            </div>
        </TitleTwoBox>
    )
}
