// -*- typescript -*-
//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// external
import React from 'react'
import ReactDOM from 'react-dom/client'
// the app
import { Smith } from './smith'


// hunt down the anchor
const anchor = ReactDOM.createRoot(document.getElementById('smith'))
// and render smith
anchor.render(<Smith />)


// end of file
