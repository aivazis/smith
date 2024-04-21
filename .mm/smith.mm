# -*- Makefile -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


# smith consists of a python package
smith.packages := smith.pkg
# a ux bundle
smith.vite := smith.ux
# and tests
smith.tests := smith.pkg.tests

# load the packages
include $(smith.packages)
# the ux
include $(smith.vite)
# the test suites
include $(smith.tests)


# end of file
