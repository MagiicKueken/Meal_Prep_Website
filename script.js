var data = {
  "Wochentage": [
      {
          "Tag": "Montag",
          "Mahlzeiten": [
              {
                  "Name": "Frühstück",
                  "Gericht": "Overnight Oats mit Erdnussbutter & Beeren",
                  "Zutaten": [
                      [
                          "Haferflocken",
                          "50g"
                      ],
                      [
                          "Milch",
                          "200 ml"
                      ],
                      [
                          "Erdnussbutter",
                          "1 TL"
                      ],
                      [
                          "Beeren",
                          "50 g"
                      ],
                      [
                          "Honig",
                          "1 TL"
                      ]
                  ],
                  "Zubereitung": [
                      [
                          1,
                          "Bring water to boil"
                      ],
                      [
                          2,
                          "Put noodles in"
                      ],
                      [
                          3,
                          "Cook noodles"
                      ]
                  ],
                  "Nährwerte": {
                      "Kcal": 450,
                      "Protein": 24,
                      "KH": 50,
                      "Fett": 15
                  }
              },
              {
                  "Name": "Abendessen",
                  "Gericht": "Hähnchenpfanne mit Brokkoli & Süßkartoffeln",
                  "Zutaten": {
                      "Hähnchenbrust": "300 g",
                      "Brokkoli": "300 g",
                      "Süßkartoffeln": "300 g",
                      "Olivenöl": "1 EL",
                      "Salz, Pfeffer": "nach Geschmack"
                  },
                  "Nährwerte": {
                      "Kcal": 520,
                      "Protein": 55,
                      "KH": 45,
                      "Fett": 12
                  }
              }
          ]
      }
  ]
}
  
let currentDayOfWeek = 0;
let currentMeals = 0;

console.log(data);

//Header
document.getElementById("header").innerHTML = data.Wochentage[currentDayOfWeek].Tag;

//Time of day
document.getElementById("meal-left-timeOfDay").innerHTML = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Name;

//Recipe
document.getElementById("meal-left-recipe-name").innerHTML = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Gericht;

//Ingredients aka zutaten

let ingredients = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zutaten;
let ingredientsHtml = document.getElementById("meal-left-ingredients");
ingredientsHtml.innerHTML = "Zutaten: </br>";
ingredientsHtml.innerHTML += "<ul>";

//Loop over all the ingredients, and display them in a list-style fashion onto the webpage
for (let i = 0; i < ingredients.length; i++){
  let currentIngredient = ingredients[i];

  ingredientsHtml.innerHTML += "<li>" + currentIngredient[1] + " " + currentIngredient[0] + "</li>";
}

ingredientsHtml.innerHTML += "</ul> </br></br>"

//let ersteZutat = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zutaten[0][1] + " " + data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zutaten[0][0]
//document.getElementById("meal-left-ingredients").innerHTML = ersteZutat;




































//Zubereitungs
let preperation = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zubereitung;
let preperationsHtml = document.getElementById("meal-left-preperations");

preperationsHtml.innerHTML = "Zubereitung: </br>";
preperationsHtml.innerHTML += "<ol>";

for (let i = 0; i < preperation.length; i++){
  let currentStep = preperation [i];
  preperationsHtml.innerHTML += currentStep [0] + ". " + currentStep[1] + "</br>";
}

preperationsHtml.innerHTML += "</ol>";

