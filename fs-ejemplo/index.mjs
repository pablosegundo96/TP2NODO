import { log } from 'console';
import fs from 'fs';

//leer un archivo de manera asincrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err)throw err; 
    console.log('contenido del archivo:', data);
    
});

//escribir en un nuevo archivo
fs.writeFile('./data/newfile.txt', 'contenido nuevo', (err) => {
    if (err) throw err;
    console.log('archivo creado y escrito');        
});

// renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) =>{
    if (err) throw err;
    console.log('archivo renombrado');
});