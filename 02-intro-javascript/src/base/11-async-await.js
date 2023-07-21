const API_KEY = '14NGx2iAPrVQffEdvg6SVCRLjy8wyAou';


const getImage = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await response.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage()
    .then(console.log)
    .catch(console.error);