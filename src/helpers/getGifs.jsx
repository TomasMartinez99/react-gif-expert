
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=STqout3vrNsq6gaWzWr7sZYJ8xR73HLU&q=${ category }&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    // Extraemos datos del arreglo obtenido
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );
  
    return gifs;
}
