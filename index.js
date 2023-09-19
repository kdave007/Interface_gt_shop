import express from 'express';
import userRoutes from './routes/userRoutes.js';

//create app
const app = express();

//enable pug
app.set('view engine','pug');
app.set('views','./views');

//piblic folder
app.use(express.static('public'));

//routing
app.use('/',userRoutes);

//define port and start
const port = 3000;

app.listen(port, ()=>{
     console.log(`Server running on port ${port}`); 
});