const express=require('express');
const faker=require('faker');
const cors = require('cors');
const app=express();
const bodyParser=require('body-parser');
//enviromental variable or enviromental constants




var users=[];

for(let i=0;i<10;i++)
users.push({
    id:faker.random.uuid() ,
    name:faker.name.findName(),
    email:faker.internet.email(),
    phone:faker.phone.phoneNumber(),
    country:faker.address.country()
});
for(let i=0;i<10;i++)
console.log(users[i]);


app.get('/users',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(users);
})




app.listen(4000,()=>{
    console.log(`Server is up and running on PORT 4000.`)
})