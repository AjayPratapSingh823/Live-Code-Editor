const express=require('express')
const router=express.Router();
const {Compiler}=require('../controller/EditorController')
router.post('/compiler',Compiler)
module.exports=router;