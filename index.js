const Express = require('express');
const app = Express();

// Routes
app.get('/', (request, response) => response.send('Hello, world.'));

app.listen('3000');
