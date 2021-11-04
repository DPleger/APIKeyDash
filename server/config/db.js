const mysql = require('mysql');

// Creates connection to MySQLWorkBench
const db = mysql.createConnection({
    
    host: 'bastion.prod.forge.redaptcloud.com',
    user: 'root',
    password: '8tcFkhxIMVPsKX8U',
    database: 'forge_api_test'
});

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'bastion.prod.forge.redaptcloud.com',
    user: 'bharathv',
    password: 'This is a test1!',
    database: 'forge_api_test'
});


module.exports = pool;