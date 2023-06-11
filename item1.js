const express = require('express');
const app = express();


// EJERCICIO: Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
// para probar escribir en el navegador "http://localhost:8080/saludo/Nombre/Apellido" Gracias!!

app.get('/saludo/:nombre/:apellido', (request, response) => {
  const nombre = request.params.nombre;
  const apellido = request.params.apellido;
  const saludo = `Hola ${nombre} ${apellido}!`;

  response.send(saludo);
});



// EJERCICIO: Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado})
// para probar escribir en el navegador "http://localhost:8080/dividir/Numerodividendo/Numerodivisor" Gracias!!

app.get('/dividir/:divisor/:dividendo', (request, response) => {
  const dividendo = parseInt(request.params.dividendo);
  const divisor = parseInt(request.params.divisor);
  
  if (divisor === 0) {
    response.status(400).json({ error: "No se puede dividir por cero" });
  } else {
    const resultado = dividendo / divisor;
    response.json({ resultado });
  }
});

// EJERCICIO: Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
// para probar escribir en el navegador "http://localhost:8080/sumar/NumeroValor1/NumeroValor2" Gracias!!

app.get('/sumar/:valor1/:valor2', (request, response) => {
  const valor1 = parseInt(request.params.valor1);
  const valor2 = parseInt(request.params.valor2);

  if (valor1 < 0 || valor2 < 0) {
    response.status(400).json({ error: "No se pueden enviar números menores que cero" });
  } else {
    const resultado = valor1 + valor2;
    response.json({ resultado });
  }
});

// EJERCICIO: Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
// para probar escribir en el navegador "http://localhost:8080/verificar?numero=par/impar" Gracias!!

app.get('/verificar', (request, response) => {
  const numero = parseInt(request.query.numero);

  if (isNaN(numero)) {
    response.status(400).send('El parámetro "numero" debe ser un número válido');
  } else if (numero % 2 === 0) {
    response.send('Autorizado');
  } else {
    response.send('No autorizado');
  }
});


// EJERCICIO: Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
// para probar escribir en el navegador "http://localhost:8080/lista" Gracias!!

app.get('/lista', (request, response) => {
  const listaDeCompras = {
    productos: [
      { nombre: 'Azúcar', cantidad: 8 },
      { nombre: 'Chelas', cantidad: 200 },
      { nombre: 'Café', cantidad: 1 },
      { nombre: 'Frutas', cantidad: 9 },
      { nombre: 'Arroz', cantidad: 30 }
    ]
  };

  response.json(listaDeCompras);
});



app.listen(8080, () => {
  console.log('Servidor funcionando en el puerto 8080');
});

