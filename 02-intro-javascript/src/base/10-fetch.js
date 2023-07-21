const API_KEY = '14NGx2iAPrVQffEdvg6SVCRLjy8wyAou';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

request.then((response) => response.json())
    .then(({ data }) => {
        console.log(data.images.original)
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    })
    .catch( console.error );