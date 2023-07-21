const person = {
    name: 'Tony',
    lastName: 'Stark',
    edge: 45,
    address: {
        ciudad: 'new york',
        zip: 123,
        lat: 14.80,
        lng: 32.09,
    }
};
console.log({ person })

const person2 = {...person};
person2.name = 'peter';

// console.table({ person })
console.log({ person2 });