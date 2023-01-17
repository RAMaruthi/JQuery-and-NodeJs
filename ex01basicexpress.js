const experess = require("express");
const parser = require("body-parser");
const app = experess();

app.use(parser.urlencoded({extended : false}))
app.get("/", (req, res) => res.send("WELCOME TO EXPRESS BASICS"))

app.get('/webapp', (req, res) => res.sendFile(__dirname + "/webapp.html"))

app.get('/reg', (req, res) => res.sendFile(__dirname + "/reg.html"))

app.get('/Aftersubmit', (req, res) => {
    const name = req.query.txtname;
    const email = req.query.txtemail;

    res.send(`${name} is reg with will us send with the mail ${email}  `)
});

app.post('/Aftersubmit', (req, res) => {
    if (req.body == null) {
        res.send(`THE FROM DOESNOT CONTAIN BODY IN IT`)
    }
    else {
        const name = req.body.txtname;
        const email = req.body.txtemail;
        res.send(`${name} is reg with will us POST send with the mail ${email}  `)
    }
})


app.listen(4567, () => console.log("SERVER IS AVALIABLE AT 123"))
