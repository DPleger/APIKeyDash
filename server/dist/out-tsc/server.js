import { __awaiter } from "tslib";
import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import { schema } from './Schema/index';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield createConnection({
        type: "mysql",
        host: 'bastion.prod.forge.redaptcloud.com',
        username: 'root',
        password: '8tcFkhxIMVPsKX8U',
        database: 'forge_api_test',
        logging: true,
        synchronize: false,
        entities: []
    }).then(connection => {
        console.log("Connection established.");
    }).catch(error => console.log(error));
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));
    app.listen(4000, () => console.log("Server is listening at port 4000... "));
});
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
//# sourceMappingURL=server.js.map