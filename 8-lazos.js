console.log(`Trabajando con condiciones`);

const ciudades = ['Bogotá', 'Lima', 'Santiago', 'Buenos Aires'];
console.log(ciudades);

const otrasCiudades = new Array();
otrasCiudades.push('Madrid', 'Paris', 'Roma', 'Londres');
otrasCiudades.push('Berlín');

let posicion = 0;

console.log(otrasCiudades);

console.log(otrasCiudades[1]);

const edadComprador = 12;

if (edadComprador >= 18) {
  console.log('Puede comprar un pasaje');
} else {
  console.log('No puede comprar pasajes, es menor de edad');
}

while (posicion < otrasCiudades.length) {
  // code here
  posicion++;
  break;
}

for (let posicion = 0; posicion < otrasCiudades.length; posicion++) {
  console.log(posicion);
}
