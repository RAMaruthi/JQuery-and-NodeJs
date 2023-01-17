const h = require("http");
const f = require("fs");
const dir = __dirname;
const httpParse = require("url").parse

function displayPage(res, url) {
    const file = dir + url + ".html";
    f.createReadStream(file).pipe(res);
}


function errorPage(res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("<h1 style='color:red'>OOPS! Something wrong happened</h1>")
    res.write("<hr>")
    res.write("<h2>The Page U have requested is not available with Us!!!</h2>")
}



h.createServer((req, res) => {
    if (req.method == "GET") {
        const query = httpParse(req.url).query;
        if (query != null) {
            let obj = httpParse(req.url, true).query
            console.log(obj)
            const msg = `Thanks Mr.${obj.txtname} for registering with us! ur Email ${obj.txtemail} will be registered and willl be concated`
            res.write(msg)
            res.end()
            return;
        }

    }
    else if (req.method == "POST") {
        req.on("data", function (inputs) {
            res.write(inputs);
            res.end();
            return;
        })
    }
    switch (req.url) {
        case "/favicon.ico":
            res.end();
            break;
        case "/reg":
            displayPage(res, req.url)
            break;
        case "/webapp":
            displayPage(res, req.url)
            break;
        default:
            errorPage(res);
            break;
    }

}).listen(12345)
