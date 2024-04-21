// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// externals
import { Environment, Network, Observable, RecordSource, Store } from 'relay-runtime'
// types
import { FetchFunction, IEnvironment } from 'relay-runtime'

// local
// types
type EnvironmentFactory_t = () => IEnvironment

// post a query and retrieve the results
const fetchQuery: FetchFunction = (operation: { text: any }, variables: any,) => {
    // post the query
    const response = fetch('graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
    // and hand off the response
    return Observable.from(response.then((data) => data.json()))
}


// environment factory
export const createEnvironment: EnvironmentFactory_t = () => {
    // make a network
    const network = Network.create(fetchQuery)
    // a store
    const store = new Store(new RecordSource())
    // and assemble the environment
    return new Environment({ store, network })
}


// end of file
