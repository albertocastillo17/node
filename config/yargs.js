const argv = require('yargs')
.option('b', {

    alias:'base',
    type:'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'

})
.option('l', {

    alias:'listar',
    type:'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'

})
.option('h', {

    alias:'hasta',
    type:'number',
    demandOption: true,
    // default: 10,
    describe: 'Es el limite que se decea alcanzar en la tabla'

})
.check((argv, options) => {
    if (isNaN (argv.h, argv.b )) {
        
        throw 'LA BASE DEBE SER UN NUMERO'
    }
    return true;
})
.argv;

module.exports = argv;