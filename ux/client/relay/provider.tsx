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
type ProviderProps_t = { children: React.ReactNode }
type Provider_t = ({ children }: ProviderProps_t) => React.ReactElement

// the relay environment provider
export const Provider: Provider_t = ({ children }) => {
    // make and memoize the relay environment
    const environment = React.useMemo(() => createEnvironment(), null)
    // create the provider
    return (
        <RelayEnvironmentProvider environment={environment}>
            {children}
        </RelayEnvironmentProvider>
    )

}


// end of file
