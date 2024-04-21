// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// local
// components
import { Theme } from './theme'
import { Page } from './+page'


// the layout for this route
export const Layout = () => {
    // render
    return (
        <Theme>
            <Page />
        </Theme>
    )
}


// end of file
