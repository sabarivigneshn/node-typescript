// Import everything from express and assign it to the express variable
import * as express from 'express';
import * as morgan from "morgan"; // log requests to the console (express4)

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controllers/welcomeController';
import {ApiRoutes} from './routes/apiRoutes';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);
app.use('/api',ApiRoutes);
app.use(morgan());  // log every request to the console

// Serve the application at the given port
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});