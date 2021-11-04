import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection, Connection } from "typeorm";
import { schema } from './Schema/index';
import { site_user } from "./src/Entities/Users";

const main = async() => {
    
    const connection = await createConnection({
        type: "mysql",
        host: 'forge-api-prod-2-new.cfmorrjwa4k3.us-west-2.rds.amazonaws.com',
        port: 3306,
        database: 'forge_api_test',
        //port: 58538,
        username: 'root',
        password: '8tcFkhxIMVPsKX8U',
        connectTimeout: 10000,
        logging: true,
        synchronize: true,
        entities: [site_user]
    });

    connection.connect();
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.listen(3001, () => console.log("Server is listening at port 3001... "));
};

main().catch((err) => {
    console.log(err);
});

/*
async function startServer() {
    const app = express();

    app.use(cors({origin: '*', credentials: true, optionSuccessStatus: 200}), function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    const apolloServer = new ApolloServer({
        typeDefs,
        //resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app:app});
    app.use((req, res) => {
        res.send("Apollo server starting... ");
    });

    pool.getConnection((err, conn) => {
        if(err) throw err;


    })

    app.listen(4000, () => console.log("Server is listening at port 4000... "));
}
startServer();
*/