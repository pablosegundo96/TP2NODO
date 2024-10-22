import path from 'path';

const filePath = '.data/example.txt';

//obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//obtener la extemsión del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath)
