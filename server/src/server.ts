import { config } from 'dotenv';
import express, { json } from 'express';
import path from 'path'
import cors from 'cors';
import routes from './routes';

config();
const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors());
app.use(json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});