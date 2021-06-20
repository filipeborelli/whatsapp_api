import {} from 'dotenv/config'
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { router } from './routes/router';
export const app = express();
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '40mb' }));
app.use(router);