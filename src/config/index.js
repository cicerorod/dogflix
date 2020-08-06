const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:8080"
  : "https://dogflixcic.herokuapp.com";

export default { URL_BACKEND };

// https://dogflixcic.herokuapp.com/categorias
// https://dogflixcic.herokuapp.com/videos
// https://dogflixcic.herokuapp.com/categorias?_embed=videos
