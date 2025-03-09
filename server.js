const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, Railway!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
