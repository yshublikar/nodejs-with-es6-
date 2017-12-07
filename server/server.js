import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';
import config from './config/config';

let app = express();
let db;
//Parse req data
app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


app.all('/*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    console.log("inside route");
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use('/', routes);

// If no route is matched by now, it must be a 404
app.use(function(req, res, next) {
    res.status(404).json({ status: "Page not found" }).end();

});

//Start server
app.set('port', config.port);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

//Mongodb using mognoclient
mongoose.connect(config.mongo.url, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");
});

export default app;