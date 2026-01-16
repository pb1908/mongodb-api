import express from "express";

const app = express();
const Port = 6969;

//CRUD Funtionality

//R- Read
app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});



//C-Create
app.post('/movies',(req, res)=>{

})



//U-Update
app.put('/movies/:id', (req, res)=>{

})


//D- Delete
app.delete('/movies/:id', (req, res)=>{

})

app.listen(Port, () => {
  console.log(`The Server is running at http:/localhost:${Port}`);
});
