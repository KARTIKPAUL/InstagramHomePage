const expres = require('express')
const cors = require('cors');
const connectDB = require('./config/dbConfig.js');
const authRoter = require('./Routes/authRouter.js');
const app = expres();


//Database Connection
connectDB()


//MiddleWare
app.use(expres.json());
app.use(cors());
//Trial
app.use('/',authRoter);

app.get('/', (req,res) => {
    res.send('Hello');
    
})

module.exports = app;