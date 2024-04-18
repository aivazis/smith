// -*- web -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// externals
import React from 'react'

// types
interface Props_t {
    children?: React.ReactNode,
    fallback?: React.ReactElement,
}

interface State_t {
    clean: boolean,
}

// make an error boundary
export class ErrorBoundary extends React.Component<Props_t, State_t> {
    public state: State_t = {
        clean: true
    }

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { clean: false };
    }

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        // if something went wrong, log
        console.log(error, info.componentStack);
        // and done
        return
    }

    public render() {
        // if an error has been caught
        if (!this.state.clean) {
            // do something special
            return this.props.fallback
        }
        // otherwise, just render my children
        return this.props.children;
    }
}


// end of file
