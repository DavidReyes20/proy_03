//paquete importado
require('colors');

//referencia el modulo math a traves de la constante math
const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('*******************************'.green);
    console.log('*   '.green,'Funciones matematicas'.bgGreen,
                '   *'.green);
    console.log('*******************************\n'.green);
    console.log('*********************************'.cyan);
    console.log('* '.cyan + math.add(5,3) + '                             *'.cyan );
    console.log('* '.cyan +math.substract(5,3)+ '                             *'.cyan);
    console.log('* '.cyan +math.multiply(5,3)+ '                            *'.cyan);
    console.log('* '.cyan +math.divide(5,3)+ '            *'.cyan);

    console.log('*********************************'.cyan);
}

main();
