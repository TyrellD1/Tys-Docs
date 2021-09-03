const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const path = require('path')
const envPath = path.resolve(process.cwd(), '.env.local')

require('dotenv').config({ path: envPath });

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306,
    connectTimeout: 60000
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/', (req, res) => {
    res.send("hello")
})

app.post('/api/create_journal_entry', (req,res)=> {
    const heading = req.body.heading;
    const body = req.body.body;
    const sqlInsert = "INSERT INTO `journal_entries` (`header`, `body`) VALUES (?, ?)"
    db.query(sqlInsert, [heading, body], (err, result) => {
        err?console.log(err):console.log(result)
    })
})

app.get('/api/get_all_journal_entries', (req,res)=> {
    const sqlInsert = "SELECT * FROM journal_entries"
    db.query(sqlInsert, (err, result) => {
        err?console.log(err):console.log(result)
    })
})

app.listen(process.env.PORT || 3306, () => {
    console.log(`running on port ${process.env.PORT || 3306}`);
})

// Make sure to handle database accessibility when we get into security protocols -

// We need to allow access to your MongoDB database now from a new IP address. For simplicity, I added all IP addresses to be allowed.

// BIG NOTE: In a production app you do not want to allow all IP addresses to access your database! You will want to find the specific IP address that hosts your server-side and add just that one as allowed.
// The app I deployed does not contain any sensitive information. It's just a simple card game so no need for me to be super secure. Once more, do not do this for a real production app or even a side project that may contain sensitive information.
