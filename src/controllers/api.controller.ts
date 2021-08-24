import { Request, Response } from 'express';

import { Phrase, PhraseInstance } from '../models/Phrase';

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

export const createPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;

    let newPhrase = await Phrase.create({ author, txt });

    res.status(201); // Created
    res.json({ id: newPhrase.id, author, txt });
}

export const getAllPhrases = async (req: Request, res: Response) => {
    let phrases = await Phrase.findAll();

    res.status(200);
    res.json({ phrases });
}

export const getPhrase = async (req: Request, res: Response) => {
    let phrase: PhraseInstance | null = null;
    
    if(req.params.id && !isNaN(parseInt(req.params.id as string))) {
        phrase = await Phrase.findByPk(req.params.id);
    }

    if (phrase) {
        res.json({ phrase });
    } else {
        res.status(404);
        res.json({ error: 'Frase Não encontrada' })
    }
}