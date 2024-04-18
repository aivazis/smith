// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// local
import { Provider } from './relay'

// the app
export const Smith: React.FC = () => {
    // a bit of complexity arises from the fact that we have to support
    // the following hosting use cases

    // - hosting on the local machine at some port:
    //   users run the server, it grabs a port on its host and browsers connect directly
    //   using host:port

    // - hosting as a embedded app in an existing document structure
    //   an example of which is the NISAR on-demand system, where the url seen by the user,
    //   e.g. https://<host>/ondemand/user/<username>/qed, is forwarded to the qed server port
    // in order to support these use cases, we require that the embedding url ends in "qed/"
    const regex = /^(?<base>.*\/qed\/).*/
    // run the current location through it
    const match = location.pathname.match(regex)
    // deduce the base url
    const base = match === null ? "/" : match.groups.base

    // render
    return (
        <Provider>
            <BrowserRouter basename={base}>
            </BrowserRouter>
        </Provider>
    )
}


// end of file
