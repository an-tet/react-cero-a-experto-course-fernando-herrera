const greeting = (nombre) => {
    return `Hola, ${ nombre }`;
};

const getUser = () => ({
    uid: 'ksdfj12',
    username: 'perofur1',
});

console.log(greeting('Juan'));

const getUsuarioActivo = (name) => {
    return ({
        uid: 'ksdfj12',
        username: 'perofur1',
    });
}

const usuarioActivo = getUsuarioActivo('perofur1');
console.log(usuarioActivo)