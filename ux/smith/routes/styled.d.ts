// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// import original module declarations
import 'styled-components'

// and extend them
declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            background: string;
        }
    }
}


// end of file