//Requerir deendencias
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));
//app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto${PORT}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login.html",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.get("/home.html",(req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"))
});