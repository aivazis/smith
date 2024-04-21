// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import styled from 'styled-components'


// the page body
export const Body = styled.section`
    width: 100%;
    height: 100%;

    // overall styling
    background-color: ${props => props.theme.colors.background};

    // for my children
    display: flex;
    flex-direction: column;
`


// end of file
