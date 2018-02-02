import { Router, Request, Response } from 'express';

export class IssueController {
    public getIssues(req: Request, res: Response): void {
        console.log('in ct');
        res.send('suss by controller');
    }

}
