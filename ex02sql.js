const express = require("express")

const app = express();
const server = require("mssql/msnodesqlv8")
const parser = require("body-parser")

app.use(parser.urlencoded({ "extended": true }));
app.use(parser.json())


const pool = new server.ConnectionPool({
    server: '192.168.171.36',
    database: '3337',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
})

app.get("/Form", (req, res) => res.sendFile(__dirname + "/ex03.html"));

app.get("/TableOfRecords", (req, res) => res.sendFile(__dirname + "/ex04.html"));

app.post("/formPost", (req, res) => {
    const body = req.body;
    console.log(body);
    const query = `INSERT INTO Emp VALUES(${body.id}, '${body.name}', '${body.address}',${body.salary})`;
    pool.connect().then(() => {
        pool.request().query(query, (err, result) => {
            if (err)
                console.log(err)
            else
                res.send("Employee inserted successfully")
        })
    }).catch((err) => {
        console.error(err)
    })
})

app.post("/", (req, res) => {
    const body = req.body;
    const query = `INSERT INTO Emp VALUES(${body.EmpId},'${body.EmpName}','${body.EmpAddress}',${body.EmpSalary})`;
    pool.connect().then(() => {
        pool.request().query(query, (err, result) => {
            if (err)
                console.log(err)
            else
                res.send("Employee inserted successfully")
        })
    }).catch((err) => {
        console.error(err)
    })
})


app.get('/', (req, res) => {


    pool.connect().then(() => {
        pool.request().query("select * from Emp", (err, result) => {
            if (err)
                console.error(err);
            else
                res.send(result.recordset);
        })
    })
})

app.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    pool.connect().then(() => {
        pool.request().query(`select * from Emp where EmpId=${id}`, (err, result) => {
            if (err)
                console.error(err);
            else
                res.send(result.recordset)
        })
    }).catch((err) => {
        if (err) console.log(err);
    })
})

app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    pool.connect().then(() => {
        pool.request().query(`delete from Emp where EmpId=${id}`, (err, result) => {
            if (err)
                console.error(err);
            else
                res.send("Employee Delete successfully")
        })
    }).catch((err) => {
        if (err) console.log(err);
    })
})




app.listen(4567, () => console.log("SERVER IS AVALIABLE AT 123"))