import express from 'express';
import userRoutes from './routes/userRoutes.js';
import db from './config/db.js'

//create app
const app = express();

//DB connection
try{
     await db.authenticate();
     console.log('DB Successfull connection');
} catch (err){
     console.log(err)
}

//enable pug
app.set('view engine','pug');
app.set('views','./views');

//piblic folder
app.use(express.static('public'));

//routing
app.use('/auth',userRoutes);

//define port and start
const port = 3000;

app.listen(port, ()=>{
     console.log(`Server running on port ${port}`); 
});