import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10); 1
    res.json({ number: nRand });
}

export const name = (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name });
}