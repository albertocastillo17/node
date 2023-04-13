const { rejects } = require('assert');
const fs = require('fs');
var colors = require('colors'); //importa el paquete de colores- mas bien es para que se pueda usar


    // return new Promise((resolve, reject) => {

    //     console.log('================');
    //     console.log(`TABLA DEL: ${base}`);
    //     console.log('================');
        
    //     let salida = '';
        
    //     for (let i = 1; i<=10; i++)
    //     {
    //         salida += `${base} x ${i} = ${base * i}\n`;
    //     }
    
    //     console.log(salida);
    
    //     fs.writeFileSync(`tabla-${base}.txt`, salida );
    
    //     resolve(`tabla-${base}.txt creado`); //esto se convirtio en una promesa,
    //                                         // me refiero la funcion, el resolve que se ve en la linea 21
    //                                         // antes era un console.log

    // })
   
//}

 //Una manera de hacerlo tambien es de la manera asincrona async-await

const crearArchivo = async(base = 5, listar= false, hasta= 10) => {

    try {
        
        
        

    let salida = '';
    let consola = '';
        
        for (let i = 1; i<=hasta; i++)
        {
            salida +=  base + "x" + i + "=" + base * i + "\n"   //`${base} x ${i} = ${base * i}\n`; <--- para meterle colores a ese tipo de codigo/template, seria asi `${base} ${'x'.green} ${i} = ${base * i}\n`;
            consola +=  base + "x".yellow + i + "=" + base * i + "\n"
            
        }
    
        if (listar) {
            console.log('================'.inverse.red);
            console.log( colors.blue ('TABLA DEL:'), base);
            console.log('================'.inverse.red);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
    
        return `tabla-${base}.txt creado`; 

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo: crearArchivo
}