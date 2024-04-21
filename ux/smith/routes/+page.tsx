// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// local
import { Body } from './body'
import { Panel } from './panel'
import { Status } from './status'

// the page
export const Page = () => {
    // render
    return (
        <Body>
            <Panel />
            <Status />
        </Body>
    )
}


// end of file
