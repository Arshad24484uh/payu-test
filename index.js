const express = require('express');
const app = express();
app.use(express.json());


app.post('/verify-payment',async(req,res)=>{
    console.log(req.body);
  return  res.redirect('https://www.google.com');
})

app.get('/',(req,res)=>{
    res.send('yes iam live');
})

app.listen(8000,()=>{
    console.log('your app is running on 6000');
})