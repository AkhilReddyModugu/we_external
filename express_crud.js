const express= require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

app.listen(port,()=>{
    console.log(`Server listening at port:${port}`);
});

app.get("/users",(req,res)=>{
    res.send(users);
});

app.get('/users/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const user= users.find(user=> user.id===id);
    res.send(user);
})
app.post('/users',(req,res)=>{
    const user= req.body;
    users.push(user);
    res.send('User Created Successfully!!!');
});

app.put('/users/:id',(req,res)=>{
    const userId= parseInt(req.params.id);
    const updatedUser= req.body;
    users = users.map(user => (user.id === userId ? updatedUser : user)); 
    res.send("User Updated Successfully");
})

app.delete('/users/:id',(req,res)=>{
    const userId= parseInt(req.params.id);
    users = users.filter(user=> user.id!==userId);
    res.send("User Deleted Successfully");
})