//como la fn es async, esta fn no devuelve directamente los gifs
//lo que devuelve es una promesa que resuelve la coleccion de mis imagenes

export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=8vSnXHREsh8gTCyb7wpdyPL02HtloEb3`;

    const resp = await fetch ( url );
    const { data } = await resp.json();
    //el array data contiene mucha info que no necesito.. voy a usar map para extraer las props que me sirven
    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return(gifs);
  }