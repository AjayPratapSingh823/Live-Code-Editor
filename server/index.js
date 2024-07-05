const express= require('express')
const cors= require('cors')
const axios = require('axios')
const app = express()
const PORT=8000;
const EditorRoutes=require('./routes/EditorRoutes')
app.use(cors());
app.use(express.json());
app.use('/api',EditorRoutes);

app.listen(8000,(req,res)=>{
    console.log(`Server is listening on 8000`);
})