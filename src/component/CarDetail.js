import { Box } from '@material-ui/core'
import React from 'react'
import styled from '@emotion/styled'

const DetailBox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    max-height: 0;
    bottom: 0;
    transition: 1s;
    height: 152px;
    animation: fadeInDetail 1s forwards;
    animation-delay: .5s;
`
const Detail1 = styled(Box)`
    margin-right: 70px;
    width: 420px!important;
    img {
        max-width: 100%;
    }
`
const Detail2 = styled(Box)`
    width: 410px;
    img {
        max-width: 100%;
    }
`
export const CarDetail = () => {
    return (
        <DetailBox>
            <Detail1>
                <img src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg" alt="" />
            </Detail1>
            <Detail2>
                <img src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg" alt="" />
            </Detail2>
        </DetailBox>
    )
}
