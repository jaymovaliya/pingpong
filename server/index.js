const app = require('./app.js');
const db = require('./db.js');

const port = process.env.PORT || 3001;

(async () => {
    try {
        await db.connect();
        console.log("connected to databse");
        const server = require('http').createServer(app);
        server.listen(port);
    } catch (err){
        console.error("error while connecting database", err);
        process.exit(1);
    }
})()
