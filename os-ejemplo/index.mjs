import OS from 'os';

//obtener la arquitectura del sistema
console.log('Arquitectura:', OS.arch());

//obtener el tipo de sistema operativo 
console.log('Plataforma: ', OS.platform());

//cantidad total de memoria
console.log('Memoria total:', OS.totalmem());

//memoria libre
console.log('Memoria libre:', OS.freemem());

//informacion de la CPU
console.log('Informacion de la CPU:' , OS.cpus());