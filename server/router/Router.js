import express from 'express'

const Router=express.Router()


Router.get('/',(req,res)=>{
    res.send("hello sever running")
})


//hell this is from router baba

export default Router;