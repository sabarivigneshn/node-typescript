// Import only what we need from express
import * as express from 'express';
import {IssueController} from './../controllers/issueController';
// Create a new express application instance
const app: express.Application = express();

import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();
const controller = new IssueController();

// In this case it's /api
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    console.log('ff');
    res.send(`Hello, ${name}`);
});
//response from controller 
router.get('/ctlr',controller.getIssues);

// Export the express.Router() instance to be used by server.ts
export const ApiRoutes: Router = router;