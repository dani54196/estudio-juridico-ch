const placeId = process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID;
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
fetch(
  `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,review&key=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const reviews = data.result.reviews;
    console.log(reviews);
  })
  .catch((error) => console.error("Error al obtener reseñas:", error));
