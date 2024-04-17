# -*- python -*-
# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


# framework
import pyre

# my protocol
from .Action import Action as action


# class declaration
class Command(pyre.panel(), implements=action):
    """
    Base class for {smith} commands
    """


# end of file
