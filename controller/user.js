const User = require("../models/user")
const {v4:uuidv4}=require('uuid')
const { setUser } = require("../service/auth")
async function handleUserSignup(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password,

    })
     return res.redirect("/")
     // return res.send('sjsj')
    }
    async function handleUserLognin(req,res){
        const {email,password}=req.body
        const user=await User.findOne({email,password})
        if(!user) return res.render('login',{
            error:"Invalid UserName or Password"
        });
        // return res.send("dkdk")
        const sessionId=uuidv4()
        setUser(sessionId,user)
        // console.log(sessionId)
        res.cookie('uid',sessionId)
        return res.redirect("/")

}
module.exports={
    handleUserSignup,
    handleUserLognin,
}