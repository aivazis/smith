//
// michael a.g. aïvázis <michael.aivazis@para-sim.com>
// (c) 1998-2024 all rights reserved


// vite support
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // path resolutions
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './smith'),
    },
  },
  // the plugins
  plugins: [react()],
})


// end of file