# -*- python -*-
# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


# externals
import graphene

# types
from .Smith import Smith


# the query
class Query(graphene.ObjectType):
    """
    The top level query
    """

    # the queries
    smith = graphene.Field(Smith)

    # the resolvers
    @staticmethod
    def resolve_smith(root, info, **kwds):
        """
        Resolve the server side store state
        """
        # get the store
        store = info.context["store"]
        #  and pass it on
        return store


# end of file
