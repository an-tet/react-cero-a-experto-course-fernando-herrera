const person = {
    name: 'Tony',
    edge: 45,
    key: 'Ironman',
};

const {name, edge, key} = person;

console.log(name);
console.log(edge);
console.log(key);

const returnAvenger = ({ key, edge }) => {
    return {
        keyName: key,
        edge2: edge,
        latlng: {
            lat: 412412,
            lng: 124124,
        },
    }
};

const { keyName, edge2, latlng: {lng, lat} } = returnAvenger(person);

console.log(lat, lng)
console.log(keyName, edge2);