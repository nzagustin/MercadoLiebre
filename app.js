const express = require('express');
const path = require('path');

const app = express();

app.get('', (req,res) =>{
    res.send("Ahora si entre");  // Enviar texto o codigo HTML
});

// acceso al html que vos estas usando
app.get('/mercadoLiebre', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/home.html'));
}); 
app.get('/login', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/register', (req, res) =>{  
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.use(express.static(path.join(__dirname, './public')));  

//localhost va a estar en 
app.listen(process.env.PORT || 3002, () => {
    console.log("Servidor corriendo");
});



