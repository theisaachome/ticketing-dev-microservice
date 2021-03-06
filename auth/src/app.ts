import express, { json } from 'express';
import 'express-async-errors';

import cookiesesion from 'cookie-session';
import {currentUserRouter} from './routes/current-user';

import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import {signupRouter} from './routes/signup';
import {errorHandler,NotFoundError}from '@hometickets/common';


const app = express();
app.set('trust proxy',true);
app.use(express.json());
app.use(cookiesesion({
  signed:false,
  secure:process.env.NODE_ENV !== 'test',
}))
app.use(currentUserRouter);

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.all("*",async(req,res,next)=>{
  throw new NotFoundError();
})
app.use(errorHandler);


export { app};