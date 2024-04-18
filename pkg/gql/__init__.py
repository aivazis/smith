# -*- python -*-
# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


"""
Home the GraphQL resolvers
"""

# externals
import graphene

# query
from .Query import Query

# mutation
from .Mutation import Mutation


# build the schema
schema = graphene.Schema(
    # supported operations
    query=Query,
    mutation=Mutation,
)


# end of file
