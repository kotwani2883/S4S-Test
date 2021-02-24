const express=require('express');
const faker=require('faker');
const cors = require('cors');
const app=express();
const env=require('dotenv');


//enviromental variable or enviromental constants
env.config();

app.use(cors());


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
    res.send(users);
})




app.listen(process.env.PORT,()=>{
    console.log(`Server is up and running on PORT ${process.env.PORT}.`)
})