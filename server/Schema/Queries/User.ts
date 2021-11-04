import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { site_user } from '../../src/Entities/Users';


export const GET_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return site_user.find();
    },
};