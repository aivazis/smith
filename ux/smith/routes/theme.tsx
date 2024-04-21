// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

// local
// types
type Props = { children: React.ReactNode }


// the provider
export const Theme = ({ children }: Props) => {
    // the theme
    const theme: DefaultTheme = {
        colors: {
            background: "hsl(0deg, 0%, 50%)",
        }
    }
    // render
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

// end of file
