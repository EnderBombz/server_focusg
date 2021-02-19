const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routes/router')
const cookieParser = require('cookie-parser');

app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use(cors({
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("FOCUSGROUP rest API (tmp) - 2021");
})

app.use(routers);

app.listen(3080, () => {
    console.log('running on port 3080')
})