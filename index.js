
let characters = 
  { "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "homeworld": "Tatooine",
    "films": [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
      "The Force Awakens"
      ],
    "species": [
      "Human"
      ],
    "vehicles": [
        {
        "name": "Snowspeeder",
        "model": "t-47 airspeeder",
        "manufacturer": "Incom corporation",
        "cost_in_credits": null,
        "length": "4.5",
        "max_atmosphering_speed": "650",
        "crew": 2,
        "passengers": 0,
        "cargo_capacity": "10"
        },
        {
        "name": "Imperial Speeder Bike",
        "model": "74-Z speeder bike",
        "manufacturer": "Aratech Repulsor Company",
        "cost_in_credits": "8000",
        "length": "3",
        "max_atmosphering_speed": "360",
        "crew": 1,
        "passengers": 1,
        "cargo_capacity": "4"
        }
      ],
  "starships": [
    {
      "name": "X-wing",
      "model": "T-65 X-wing",
      "manufacturer": "Incom Corporation",
      "cost_in_credits": 149999,
      "length": "12.5",
      "max_atmosphering_speed": "1050",
      "crew": 1,
      "passengers": 0,
      "cargo_capacity": "110",
      "consumables": "1 week",
      "hyperdrive_rating": "1.0",
      "MGLT": "100",
      "starship_class": "Starfighter"
    },
    {
      "name": "Imperial shuttle",
      "model": "Lambda-class T-4a shuttle",
      "manufacturer": "Sienar Fleet Systems",
      "cost_in_credits": 240000,
      "length": "20",
      "max_atmosphering_speed": "850",
      "crew": 6,
      "passengers": 20,
      "cargo_capacity": "80000",
      "consumables": "2 months",
      "hyperdrive_rating": "1.0",
      "MGLT": "50",
      "starship_class": "Armed government transport"
    }
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length;
}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  // TODO: Add your code here.
  if (character.starships.length === 0) return `none`;
  else return character.starships[1].name;
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  // TODO: Add your code here.
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  // TODO: Add your code here.
  return character.vehicles.reduce((sum, currValue) => {
    if (currValue.cost_in_credits) sum += currValue.cost_in_credits;
    return sum;
  }, 0);
}
/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  // TODO: Add your code here.
  return character.starships.reduce((sum, currValue) => {
    sum += currValue.crew + currValue.passengers;
    return sum;
  }, 0);
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  // TODO: Add your code here.
  if (filmNumber < 1 || filmNumber > 3) {
    return `Error: No films found. Try "Hansel & Gretel: Witch Hunters" instead.`
  }
  else return character.films[filmNumber-1];
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  // TODO: Add your code here.
  let sumCargo = character.vehicles.reduce((sum, currValue) => {
    sum += Number(currValue.cargo_capacity);
    return sum;
  }, 0);
  sumCargo += character.starships.reduce((sum, currValue) => {
    sum += Number(currValue.cargo_capacity);
    return sum;
  }, 0);
  return sumCargo;
}



/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  // TODO: Add your code here.
  let slowestName = "";
  let slowestSpeed = 0;
  if (character.starships.length > 0) {
    character.starships.forEach(ship => {
      if (Number(ship.max_atmosphering_speed) > slowestSpeed) {
        slowestName = ship.name;
        slowestSpeed = ship.max_atmosphering_speed;
      };
    });
    return slowestName;
  }
  else return `none`;
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  // TODO: Add your code here.
  let slowestName = "";
  let slowestSpeed = 0;
  if (character.starships.length > 0) {
    character.starships.forEach(ship => {
      if (Number(ship.cargo_capacity) > slowestSpeed) {
        slowestName = ship.model;
        slowestSpeed = ship.cargo_capacity;
      };
    });
    return slowestName;
  }
  else return `none`;

}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/

function getSlowestVehicleOrStarshipName(character) {
  // TODO: Add your code here.
  let slowestName;
  let slowestSpeed;
  if (character.starships.length > 0) {
    character.starships.forEach(ship => {
      if (!slowestSpeed) {
        slowestSpeed = ship.max_atmosphering_speed;
        slowestName = ship.name;
      }
      if (Number(ship.max_atmosphering_speed) < slowestSpeed) {
        slowestName = ship.name;
        slowestSpeed = ship.max_atmosphering_speed;
      };
    });
  }
  if (character.vehicles.length > 0) {
    character.vehicles.forEach(vehicle => {
      if (!slowestSpeed) {
        slowestSpeed = vehicle.max_atmosphering_speed;
        slowestName = vehicle.name;
      }
      if (Number(vehicle.max_atmosphering_speed) < slowestSpeed) {
        slowestName = vehicle.name;
        slowestSpeed = vehicle.max_atmosphering_speed;
      };
    });
  }
  return slowestName;
}




/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
