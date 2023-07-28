// Assign Express & Start Server
const express = require('express');
const server = express();
server.listen((4000),() => {
    console.log(`Server is listening…`);
});

// Assign Body-Parser & Enable
const bodyParser = require('body-parser');
server.use(bodyParser.json());
// Added to support extractiion data from HTML form
server.use(bodyParser.urlencoded({ extended : true}));

// Assign Cors & Enable
const cors = require('cors');
server.use(cors());

// Assign MySQL & Establish Connection
const mySql = require('mysql');
const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nbs"
});
db.connect();

server.get("/HR",(request,response) => {
    db.query("Select * from Employees",function(err,results){
        console.log(err);
        response.json(results);
        response.end();
    });
});

server.post("/HR/NewEmployee",(request,response) => {
    let empInsert = `insert into employees values(
        ${request.body.eno},
        ${request.body.ename},
        ${request.body.esal},
        ${request.body.edept}
        )`;

    db.query(empInsert,function(err,results){
        if(err){
            console.log(`The entry was not entered into the database. Error: ${err}`);
            response.json({"result":`Entry was not made into Database. Error: ${err}`});
        }else{
            console.log(`Entry addded to database`);
            response.json({"result":`Entry made into Database`});
        };
    });
});