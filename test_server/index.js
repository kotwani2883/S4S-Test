const express=require('express');
const faker=require('faker');
const CORS=require('cors');
const app=express();
const bodyParser=require('body-parser');
//enviromental variable or enviromental constants


app.use(bodyParser.urlencoded({
    extended: true
  }));

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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.send(users);
})




app.listen(4000,()=>{
    console.log(`Server is up and running on PORT 4000.`)
})