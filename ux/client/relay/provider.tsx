// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import React from 'react'
import { RelayEnvironmentProvider } from 'react-relay'

// local
import { createEnvironment } from './environment'
// types
type Props = {
    children: React.ReactNode
}

// the relay environment provider
export const Provider = ({ children }: Props) => {
    // make and memoize the relay environment
    const environment = React.useMemo(() => createEnvironment(), [])
    // create the provider
    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    )

}


// end of file
