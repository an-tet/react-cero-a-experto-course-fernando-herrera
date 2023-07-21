import {getHeroeById} from "./08-imp-exp";
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2 segundos después');
//     const heroe = getHeroeById(2);
//     console.log(`${heroe.name} in setTimeout`);
//     resolve(heroe);
//     // reject('error');
//   }, 2000)
// });
//
// promise.then(heroe => {
//    console.log(`${heroe.name} in then`);
// }).catch((error) => console.error(error));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 segundos después');
            const heroe = getHeroeById(id);
            if (heroe){
                console.log(`${heroe.name} in setTimeout`);
                resolve(heroe);
            }
            reject('error');
        }, 2000)
    });
}

getHeroeByIdAsync(50)
    .then((heroe) => console.log(heroe))
    .catch(console.error)