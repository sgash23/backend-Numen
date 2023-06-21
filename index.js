const servidor = require('./src/server/server');
require('dotenv').config();
require('./src/database/db')

const PORT = process.env.PORT || 5000

servidor.listen(8080, () => {
    console.log(`Servidor levantado ${PORT}`);
})