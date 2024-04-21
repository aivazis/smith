// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import styled from 'styled-components'


// the page body
export const Panel = styled.section`
    // for me
    flex: 1;
    position: relative;
    margin: 0.0em;
    padding: 0.0em;

    // styling
    background-color: ${props => props.theme.colors.background};

    // my children
    overflow: hidden;
    display: flex;
    flex-direction: row;
`


// end of file
