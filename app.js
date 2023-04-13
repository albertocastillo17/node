//imprimir la tabla del 5 con un ciclo for

// const fs = require('fs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const { type } = require('os');
// const { argv } = require('process');
// const { options } = require('yargs');



console.clear(); // LIMPIA LA CONSOLA 


// console.log( argv );

// console.log('================');

// console.log('TABLA DEL 5');
// console.log('================');


// let salida = '';

// for( let i = 1; i<=10; i++ )
// {
//     const result = 5 * i;
//    salida += ( `5 x ${i}= ${result}`);
// }

// fs.writeFile(`tabla-5.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-5.txt creado`);
// } );

// const base = 1;
// let salida = '';
// for (let i = 1; i<=10; i++)
// {
//     salida += `${base} x ${i} = ${base * i}\n`;
// }

// console.log(salida);

// fs.writeFile(`tabla-${base}.txt`, salida, (err) =>
// {
//     if (err) throw err;
//     console.log(`tabla-${base}.txt`)
// })

//AHORA VAMOS A UTILIZAR MEJOR EL writeFileSync, el cual es mucho mas sencillo

// fs.writeFileSync(`tabla-${base}.txt`, salida ); //como podemos ver es menos codigo y el resultado es el mismo

// console.log(`tabla-${base}.txt creado`);

//

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,))
    .catch((err) => console.log(err));