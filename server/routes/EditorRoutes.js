const express=require('express')
const router=express.Router();
const {Compiler}=require('../controller/EditorController')
const {signup}=require('../controller/SignupController')
router.post('/compiler',Compiler)
router.post('/signup',signup)
module.exports=router;