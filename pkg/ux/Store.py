# -*- python -*-
# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


# support
import smith


# the server side of the application store
class Store(smith.shells.command, family="smith.cli.ux"):
    """
    The application state as known to the server
    """

    # metamethods
    def __init__(self, plexus, docroot, **kwds):
        # chain up
        super().__init__(plexus=plexus, spec="store", **kwds)
        # save the root of the document
        self._docroot = docroot
        # all done
        return


# end of file
