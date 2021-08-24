import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

console.log('Server starting...');
dotenv.config();

const server = express();

server.use(cors({
    origin: '*'
})); // Por padrão, já vem tudo liberado

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/api', apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado' });
})

server.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));