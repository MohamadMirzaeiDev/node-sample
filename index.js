const express = require('express');
const app = express()
const port = process.env.PORT || 3001 ;



app.get("/" , (req,res)=>{
	res.send("hello world")
});


app.listen(port , ()=>{
	console.log("app runned in port " , port)
})
