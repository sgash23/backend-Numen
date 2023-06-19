

//Router
const getEjemplo = (req, res) => {

    const nombre = req.body.nombre;

    if (!nombre) {
      res.status(400).json({ error: 'El campo nombre es requerido.' });
      return;
    }
  
    const respuesta = {
      nombre: nombre,
      status: 'success'
    };
  
    res.json(respuesta);



    //res.send('Servidor desde controller')
};

//RouterList
const getList = (req, res) => {
   
    const compras = [
        { id: 1, producto: 'Camisa', cantidad: 2, precio: 20 },
        { id: 2, producto: 'Pantalón', cantidad: 1, precio: 40 },
        { id: 3, producto: 'Zapatos', cantidad: 1, precio: 50 }
      ];
    
      res.json(compras);
   
   
   
   // res.send('Servidor de lista desde Controller')
};

//RouterMaths
const getMath = (req, res) => {
    
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const resultado = num1 + num2;
  res.send(`La suma de ${num1} y ${num2} es ${resultado}.`);
};

// Función para dividir dos números
  const division = (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  if (num2 === 0) {
    res.status(400).send('Error: No se puede dividir entre cero.');
    return;
  }

  const resultado = num1 / num2;
  res.send(`El resultado de la división de ${num1} entre ${num2} es ${resultado}.`);
};

// Función para verificar si un número es par
const esPar = (req, res) => {
  const num = parseInt(req.params.num);

  if (num % 2 === 0) {
    res.send(`${num} es un número par.`);
  } else {
    res.send(`${num} no es un número par.`);
  }
    
    
    //res.send('Servidor de matematicas desde Controller')
};

//RouterUsers
const getUsers = ('/usuarios/:nombre/:apellido', (req, res) => {                                
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    const usuarios = `Hola ${nombre} ${apellido}!`;
    res.send(usuarios);

//(req, res) => {
    //res.send('Servidor de usuarios desde Controller')
});

module.exports = { getEjemplo, getList, getMath, getUsers};