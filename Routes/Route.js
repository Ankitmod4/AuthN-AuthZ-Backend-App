const express = require('express');
const router = express.Router();

const { Signup } = require('../Controllers/Signup');
const { Login } = require('../Controllers/Login');
const {Auth}=require('../Middlewares/Auth')
const {Admin}=require('../Middlewares/Admin')
const {Student}=require('../Middlewares/Student')
router.post('/signup', Signup);
router.post('/login', Login);

router.get('/Student', Auth, Student, (req, res) => {
    res.json({
        success: true,
        message:"Welcome to Protected Route for Student"
    })
   
        
})
router.get('/Admin', Auth,Admin,(req, res) => {
    res.json({
        success: true,
        message:"Welcome to Protected Route for Admin",
    })
        
})


module.exports = router;