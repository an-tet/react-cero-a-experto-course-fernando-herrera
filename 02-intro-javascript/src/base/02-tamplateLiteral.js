const name = 'fernando';
const lastName = 'herrera';

const fullName = `${name} ${lastName} ${1+1}`;

console.log(fullName);


function getGreetings(name) {
    return `Hola ${name}`;
}

console.log(`Este es un texto ${getGreetings(name)}`)