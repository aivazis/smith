// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved



// external
import { graphql, useLazyLoadQuery } from 'react-relay/hooks'

// local
// types
import type { useSmithQuery as useSmithQueryType } from 'generated/useSmithQuery.graphql'

// fetch the server side store state
export const useSmith = () => {
    // get the store
    const { smith } = useLazyLoadQuery<useSmithQueryType>(
        // the query
        query,
        // the vars
        {},
        // the options
        { fetchPolicy: "network-only" },
    )
    // and return it
    return { smith }
}


// the query
const query = graphql`
    query useSmithQuery {
        smith {
            # the server side store id
            id
            # the theme
            # ...themeGetThemeFragment
        }
    }
`

// end of file
