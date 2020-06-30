import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@picktix/common';
import { createChargeRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}));

app.use(currentUser); // Current user is set after cookiesession because you need the cookie to see the current user
app.use(createChargeRouter);

app.all('*', async (req, res, next) => {
    throw new NotFoundError();
});
app.use(errorHandler);

export { app };