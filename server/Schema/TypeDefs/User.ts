import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }, 
        registered_on: { type: GraphQLString },
        admin: { type: GraphQLBoolean }
    })
});
