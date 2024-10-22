import {EventEmitter} from "events";
import { emit } from "process";

//crear una instacia de eventEmitter

const emisor = new EventEmitter();

// definir un evento personalizado
emisor.on('saludo', (nombre) =>{
    console.log('¡Hola, ${nombre}!');
    
});

//emitir el evento 'saludo'
emisor.emit('saludo', 'mundo');