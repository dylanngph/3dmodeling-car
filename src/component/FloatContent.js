import { Box } from '@material-ui/core'
import React from 'react'
import styled from '@emotion/styled'

const ContentBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    line-height: 12px;
    transition: 1.5s;
    bottom: -160px;
    padding-left: 15px;
    p {
        color: #eee;
        font-size: 14px;
        width: 520px;
        line-height: 2;
    }
`
export const FloatContent = () => {
    return (
        <ContentBox>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam quis arcu libero. Suspendisse ut rutrum risus, eget
                faucibus sapien. Curabitur pharetra elit eget orci facilisis pharetra.
                Proin lobortis magna a magna bibendum viverra. Morbi a leo pharetra,
                mollis elit sed, sodales erat. Aenean porta ultricies felis nec lobortis.
                Proin porttitor nisi in elit convallis ultrices. Integer sodales tortor
                sit amet urna tincidunt, et tristique diam interdum. Donec vitae orci eros.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam quis arcu libero. Suspendisse ut rutrum risus, eget
                faucibus sapien. Curabitur pharetra elit eget orci facilisis pharetra.
                Proin lobortis magna a magna bibendum viverra. Morbi a leo pharetra.
            </p>
        </ContentBox>
    )
}
