const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        id: ID,
        email: String,
        password: String,
        registered_on: String,
        admin: String
    },

`;

module.exports = typeDefs;