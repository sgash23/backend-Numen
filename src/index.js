const servidor = require('./server/server.js')

const PORT = 8080;

servidor.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})