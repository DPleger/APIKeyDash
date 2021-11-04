import { GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";
import { UserType } from "../TypeDefs/User";
import { site_user } from "../../src/Entities/Users";

export const CREATE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }, 
        registered_on: { type: GraphQLString },
        admin: { type: GraphQLBoolean }
    },
    async resolve(parent: any, args: any) {
        const { email, password, admin, registered_on } = args;
        await site_user.insert({ email, password, admin, registered_on })
        return args;
    }
};