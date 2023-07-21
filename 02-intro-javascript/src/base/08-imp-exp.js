import { heroes } from '../data/heroes';


const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id === id);

// const { id, name, owner } = getHeroeById(2);

// console.log(`${ name } es el heroe con id ${ id } y su propietario es ${ owner }`);

const getHeroesByOwner = (ownerName) => heroes.filter((heroe, index) => heroe.owner === ownerName);

// const dcHeroes = getHeroesByOwner('DC');

// console.log(`Los heroes de DC son ${ dcHeroes.map((heroe) => heroe.name) }`);

export {
  getHeroesByOwner,
  getHeroeById
};