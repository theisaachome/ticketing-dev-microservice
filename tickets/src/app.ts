import express from 'express';
import 'express-async-errors';
import cookiesesion from 'cookie-session';
import {errorHandler,NotFoundError,currentUser,}from '@hometickets/common';
import {createTicketRouter} from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';


const app = express();
app.set('trust proxy',true);
app.use(express.json());
app.use(cookiesesion({
  signed:false,
  secure:process.env.NODE_ENV !== 'test',
}))
// must be after cookiession where currentUser is check by using cookie
app.use(currentUser);
app.use(createTicketRouter);
app.use(indexTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketRouter);
app.all("*",async(req,res,next)=>{
  throw new NotFoundError();
})
app.use(errorHandler);


export { app};