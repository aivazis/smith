// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import React from 'react'
import styled from 'styled-components'

// project
// widgets
import { Server } from '~/widgets'

// the page body
export const Status = () => {
    // render
    return (
        <Footer>
            <Server />
        </Footer>
    )
}


// the footer
const Footer = styled.footer`
`

// end of file
