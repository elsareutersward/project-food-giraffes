// Variables
const apiKey = "4fd2dd29c14db73b1a3c8639ecc045bb"
const cityName = 61
const cuisineType = 60
const apiData = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityName}&entity_type=city&cuisines=${cuisineType}`

let restaurantsArrays

// FUNCTIONS



const sortRatings = () => {
  restaurantsArrays.sort((a,b) => {
    return b.restaurant.user_rating.aggregate_rating - a.restaurant.user_rating.aggregate_rating
  })
}



// DOM
const foodReview = document.getElementById("foodReview") 

fetch(apiData, {headers:{ "user-key": apiKey}})
  .then(response => {
    return response.json();
  })
  .then((json) => {
    console.log(json)

    restaurantsArrays = json.restaurants

      printArray(json.restaurants) 
    
  
  })

  const printArray = (array) => {
   foodReview.innerHTML = ""
    array.forEach(item => {
    let restaurantName = item.restaurant.name
    // console.log(restaurantName)

    let averageCost = item.restaurant.average_cost_for_two
    // console.log(averageCost)

    let address = item.restaurant.location.address
    // console.log(address)

    let restImage = item.restaurant.photos[0].photo.url
    // console.log(restImage)

    let ratings = item.restaurant.user_rating.aggregate_rating
    // console.log(ratings)

  foodReview.innerHTML += `<div id="children">
  <img src="${restImage}" height="100"></img>
  <p>${restaurantName}</p>
  <p>${address}</p>
  <p>${averageCost}</p>
  <p>${ratings}/5.0</p>
  </div>`
   })
}

const skrivut = () => {
  console.log("skriv ut")
  sortRatings()
  printArray(restaurantsArrays)
} 

document.getElementById('sortRating').onclick = skrivut
