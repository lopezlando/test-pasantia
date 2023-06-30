import { PORT } from './config.js';
import express from 'express';
import routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/api', routes);

// start server
const port = PORT || 3000;
const server = app.listen(port, function () {
  process.env.NODE_ENV !== 'test' &&
    //eslint-disable-next-line no-console
    console.info(`Server running on port ${port}`);
});

export default { app, server };
