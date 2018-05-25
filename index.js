const Express = require('express');
const app = Express();

// Routes
app.get('/', (request, response) => response.send('Hello, world.'));

app.post('/webhook', (request, response) => {
    console.log('Do something.');
    response.status(204).send();
});

app.listen('3000');
