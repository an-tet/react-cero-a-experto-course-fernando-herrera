const personajes = ['Goku', 'Vegueta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, vegueta, ] = personajes;
console.log(vegueta);

const returnArray = ()=>{
    return ['ABC', 123];
}

const [ letter, number ] = returnArray();
console.log(letter, number);

const state = (value) => {
    return [value, () => { console.log('Hola mundo') }]
}

const [name, setName] = state('goku');
console.log(name);
setName();