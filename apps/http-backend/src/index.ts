import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/health", (req,res)=>{
    res.json({message: "working"})
})

app.post("/signup", async (req, res)=>{
    const {username, password} = req.body;
    try{
       const user = await client.user.create({
            data: {
                username,
                password
            }
        })
        
        res.status(200).json({
            message: "signup successfull",
            id: user.id
        })

    }catch(e){
        res.send('db fucked up')
    }
})

app.listen(3000, ()=>{
    console.log("running http");
})