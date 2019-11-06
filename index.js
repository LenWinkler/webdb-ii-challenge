const server = require('./server.js');

const PORT = process.env.PORT || 4019;

server.listen(PORT, () => {
    console.log(`\nServer running on ${PORT}\n`)
});