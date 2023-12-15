const User = require('../model/userModel');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler( async(req,res) =>{
    const{name,email,password,pic} = req.body;
    if(!name || !email || !password ){
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({name,email,password,pic});
    if(user){
        res.status(201);
        res.json(user);
    }else{
        res.status(500);
        throw new Error("Server Error");
    }
})
module.exports = {registerUser};
