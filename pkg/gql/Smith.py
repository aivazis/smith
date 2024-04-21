# -*- python -*-
# -*- coding: utf-8 -*-
#
# michael a.g. aïvázis <michael.aivazis@para-sim.com>
# (c) 1998-2024 all rights reserved


# externals
import graphene
import typing

# my interface
from .Node import Node


# the server side store
class Smith(graphene.ObjectType):
    """
    The server side store resolver
    """

    # {graphene} metadata
    class Meta:
        # register my interfaces
        interfaces: tuple[type[Node]] = (Node,)

    # fields
    id = graphene.ID(required=True)

    # resolvers
    @staticmethod
    def resolve_id(store, info, **kwds) -> typing.Literal["the store"]:
        """
        Retrieve the store id
        """
        print("resolving smith")
        # easy enough
        return "the store"


# end of file
