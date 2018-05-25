const Express = require('express');
const app = Express();

// Middleware
const bodyParserMiddleware = require('body-parser');
const GithubWebhookMiddleware = require('./middlewares/GithubWebhook');

// Using middleware
app.use(bodyParserMiddleware.json());
app.use('/webhook', GithubWebhookMiddleware);

// Routes
app.get('/', (request, response) => response.send('Hello, world.'));

app.post('/webhook', (request, response) => {
    console.log('Do something.');
    response.status(204).send();
});

app.listen('3000');
